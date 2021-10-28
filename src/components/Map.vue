<template>
    <div class="main">
        <div id="map" class="map"></div>
    </div>
    <div cds-layout="grid">
        <div cds-layout="col@xl:3 p-y:lg vertical gap:lg p-r:lg">
            <app-geo-json></app-geo-json>
            <app-area></app-area>
        </div>
        <div cds-layout="col@xl:9 p-y:lg">
            <p cds-text="section">Request Preview:</p>
            <pre v-html="showBody"></pre>
        </div>
    </div>
</template>

<script>
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import ImageLayer from 'ol/layer/Image';
import Static from 'ol/source/ImageStatic';
import Draw, { createBox } from 'ol/interaction/Draw';
import { getArea } from 'ol/sphere';
import { fromExtent } from 'ol/geom/Polygon';
import { mapState } from 'vuex';

import instance from '../instance/endpoint.instance';
import satOptions from '../js/satelliteOptions';

const drawSource = new VectorSource({ wrapX: false });

import AppArea from './Area.vue';
import AppGeoJson from './GeoJson.vue';

export default {
    components: { AppArea, AppGeoJson },

    data() {
        return {
            map: null,
            bbox: [],
            osm: new TileLayer({
                source: new OSM(),
            }),
            vector: new VectorLayer({
                source: drawSource,
            }),
            draw: new Draw({
                source: drawSource,
                type: 'Circle',
                geometryFunction: createBox(),
            }),
            crs: 'http://www.opengis.net/def/crs/EPSG/0/3857',
            body: null,
            showBody: null,
        };
    },

    computed: {
        ...mapState('shared', ['evalscript', 'image', 'width', 'height']),
        inputs() {
            let array = [];
            this.$store.state.shared.inputModules.forEach((element) => {
                let sat = this.$store.state[element].satellite;
                array.push({
                    type: this.$store.state[element].satellite,
                    ...(this.$store.state[element].identifier && {
                        id: this.$store.state[element].identifier,
                    }),

                    dataFilter: {
                        ...(satOptions[sat].date && {
                            timeRange: {
                                from: `${this.$store.state[element].dateMin}T00:00:00Z`,
                                to: `${this.$store.state[element].dateMax}T23:59:59Z`,
                            },
                        }),
                        ...(satOptions[sat].cloudCoverage && {
                            maxCloudCoverage: parseFloat(
                                this.$store.state[element].maxCC
                            ),
                        }),
                        ...(satOptions[sat].tiers && {
                            tiers: this.$store.state[element].tiers,
                        }),
                        ...(satOptions[sat].demInstance && {
                            demInstance: this.$store.state[element].demInstance,
                        }),
                        ...(satOptions[sat].orbitDirection && {
                            orbitDirection:
                                this.$store.state[element].orbitDirection,
                        }),
                        mosaickingOrder:
                            this.$store.state[element].mosaickingOrder,
                    },

                    processing: {
                        upsampling: this.$store.state[element].upsampling,
                        downsampling: this.$store.state[element].downsampling,
                        ...(satOptions[sat].egm && {
                            egm: this.$store.state[element].egm,
                        }),
                        ...(satOptions[sat].clampNegative && {
                            clampNegative:
                                this.$store.state[element].clampNegative,
                        }),
                        ...(satOptions[sat].minQa && {
                            minQa: this.$store.state[element].minQa,
                        }),
                    },
                });
            });
            return array;
        },
    },

    watch: {
        inputs() {
            this.createBody();
        },

        evalscript() {
            this.createBody();
        },
    },

    mounted() {
        this.map = new Map({
            layers: [this.osm, this.vector],
            target: 'map',
            view: new View({
                center: [1643701.856244, 6261721.357122],
                zoom: 10,
            }),
        });
        this.createBody();

        this.map.addInteraction(this.draw);

        this.draw.on('drawstart', this.removePolygon);
        this.draw.on('drawend', (e) => this.fetchImage(e));
    },

    methods: {
        createBody() {
            let body = {
                input: {
                    bounds: {
                        bbox: this.bbox,
                        properties: {
                            crs: this.crs,
                        },
                    },
                    data: [...this.inputs],
                },
                output: {
                    width: parseFloat(this.width),
                    height: parseFloat(this.height),
                    responses: [
                        {
                            identifier: 'default',
                            format: {
                                type: this.image,
                            },
                        },
                    ],
                },
                evalscript: null,
            };

            body.evalscript = this.evalscript;
            this.body = JSON.stringify(body);
            body.evalscript = this.evalscript.replace(/\n/g, '<br>'); //For better readability in the browser
            this.showBody = JSON.stringify(body, null, 2);
        },

        removeImage() {
            this.map //remove previously loaded image
                .getLayers()
                .getArray()
                .filter((l) => l.get('name') === 'sentinel-layer')
                .forEach((sentinelLayer) => {
                    this.map.removeLayer(sentinelLayer);
                });
        },

        addImage(response) {
            let urlCreator = window.URL || window.webkitURL;
            let imageUrl = urlCreator.createObjectURL(response.data);
            const layer = new ImageLayer({
                source: new Static({
                    url: imageUrl,
                    imageExtent: this.bbox,
                    crossOrigin: 'anonymous',
                }),
                name: 'sentinel-layer',
                zIndex: 2,
            });

            this.map.addLayer(layer);
            this.$store.commit('shared/SAVE_IMAGE', imageUrl);
        },

        removePolygon() {
            drawSource.clear();
        },

        fetchImage(e) {
            this.bbox = e.feature.getGeometry().getExtent(); //get drawn Polygon extent
            let area = getArea(fromExtent(this.bbox));
            this.createBody();

            this.$store.commit('shared/SET_AREA', area);
            this.$store.commit('shared/SET_GeoJSON', this.bbox);

            this.removeImage(); //remove previous image before loading the next one
            instance({
                method: 'POST',
                url: '/api/v1/process',
                headers: { 'Content-Type': 'application/json' },
                responseType: 'blob',
                data: this.body,
            })
                .then((response) => {
                    this.addImage(response);
                    this.removePolygon();
                })
                .catch(() => {
                    this.$store.commit(`shared/ERROR_OCCURED`);
                });
        },
    },
};
</script>

<style>
.main {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.map {
    width: 100%;
    height: 700px;
    cursor: pointer;
}
</style>
