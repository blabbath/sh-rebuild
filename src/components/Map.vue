<template>
  <div class="main">
    <div id="map" class="map"></div>
  </div>
</template>

<script>
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import { OSM, Vector as VectorSource } from "ol/source";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import ImageLayer from "ol/layer/Image";
import Static from "ol/source/ImageStatic";
import Draw, { createBox } from "ol/interaction/Draw";
import { getArea } from "ol/sphere";
import { fromExtent } from "ol/geom/Polygon";
import { mapState } from "vuex";

import instance from "../html/endpoint.instance";

const drawSource = new VectorSource({ wrapX: false });
export default {
  data() {
    return {
      map: null,
      bbox: null,
      osm: new TileLayer({
        source: new OSM(),
      }),
      vector: new VectorLayer({
        source: drawSource,
      }),
      draw: new Draw({
        source: drawSource,
        type: "Circle",
        geometryFunction: createBox(),
      }),
      crs: "http://www.opengis.net/def/crs/EPSG/0/3857",
    };
  },

  computed: {
    ...mapState("map", ["maxCC", "mosaickingOrder", "satellite", "evalscript"]),
  },

  mounted() {
    this.map = new Map({
      layers: [this.osm, this.vector],
      target: "map",
      view: new View({
        center: [1643701.856244, 6261721.357122],
        zoom: 10,
      }),
    });

    this.map.addInteraction(this.draw);

    this.draw.on("drawstart", this.removePolygon);
    this.draw.on("drawend", (e) => this.fetchImage(e));
  },

  methods: {
    removePolygon() {
      drawSource.clear();
    },

    addImage(response) {
      let urlCreator = window.URL || window.webkitURL;
      let imageUrl = urlCreator.createObjectURL(response.data);
      const layer = new ImageLayer({
        source: new Static({
          url: imageUrl,
          imageExtent: this.bbox,
          crossOrigin: "anonymous",
        }),
        name: "sentinel-layer",
        zIndex: 2,
      });

      this.map.addLayer(layer);
    },

    fetchImage(e) {
      this.bbox = e.feature.getGeometry().getExtent(); //get drawn Polygon extent
      let area = getArea(fromExtent(this.bbox));
      this.$store.commit("map/SET_AREA", area);
      this.$store.commit("map/SET_GeoJSON", this.bbox);

      this.removeImage(); //remove previous image before loading the next one

      instance({
        method: "POST",
        url: "/api/v1/process",
        headers: { "Content-Type": "application/json" },
        responseType: "blob",
        data: JSON.stringify({
          input: {
            bounds: {
              bbox: this.bbox,
              properties: {
                crs: this.crs,
              },
            },
            data: [
              {
                dataFilter: {
                  timeRange: {
                    from: "2021-04-18T00:00:00Z",
                    to: "2021-10-18T23:59:59Z",
                  },
                  maxCloudCoverage: this.maxCC,
                  mosaickingOrder: this.mosaickingOrder,
                },
                type: this.satellite,
              },
            ],
          },
          evalscript: this.evalscript,
        }),
      })
        .then((response) => {
          this.addImage(response);
          this.removePolygon();
        })
        .catch(() => {
          this.$store.commit(`map/ERROR_OCCURED`);
        });
    },

    removeImage() {
      this.map //remove previously loaded image
        .getLayers()
        .getArray()
        .filter((l) => l.get("name") === "sentinel-layer")
        .forEach((sentinelLayer) => {
          this.map.removeLayer(sentinelLayer);
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

#threshold {
  margin: 0 0.6em;
}
</style>
