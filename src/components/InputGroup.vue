<template>
    <div cds-layout="vertical gap:md">
        <app-satellite :namespace="namespace"></app-satellite>
        <app-identifier
            v-if="lengthInput > 1"
            :namespace="namespace"
        ></app-identifier>
        <cds-toggle-group layout="horizontal-inline">
            <label>Show Options</label>
            <cds-toggle>
                <label></label>
                <input
                    type="checkbox"
                    @change="toggleOptions"
                    v-model="show"
                /> </cds-toggle
        ></cds-toggle-group>
        <div v-if="show" cds-layout="vertical gap:md">
            <app-date-picker
                v-if="satelliteOptions[satellite].date"
                :namespace="namespace"
            >
            </app-date-picker>
            <app-max-CC
                v-if="satelliteOptions[satellite].cloudCoverage"
                :namespace="namespace"
            ></app-max-CC>
            <app-mosaicking-order
                v-if="satelliteOptions[satellite].mosaickingOrder"
                :namespace="namespace"
            ></app-mosaicking-order>
            <app-up-sampling :namespace="namespace"></app-up-sampling>
            <app-down-sampling :namespace="namespace"></app-down-sampling>
            <app-tiers
                v-if="satelliteOptions[satellite].tiers"
                :namespace="namespace"
            ></app-tiers>
            <app-egm
                v-if="satelliteOptions[satellite].egm"
                :namespace="namespace"
            ></app-egm>
            <app-clamp-negative
                v-if="satelliteOptions[satellite].clampNegative"
                :namespace="namespace"
            ></app-clamp-negative>
            <app-dem-instance
                v-if="satelliteOptions[satellite].demInstance"
                :namespace="namespace"
            ></app-dem-instance>
            <app-orbit-direction
                v-if="satelliteOptions[satellite].orbitDirection"
                :namespace="namespace"
            ></app-orbit-direction>
            <app-min-qa
                v-if="satelliteOptions[satellite].minQa"
                :namespace="namespace"
            ></app-min-qa>
        </div>
        <slot></slot>
        <cds-divider></cds-divider>
    </div>
</template>

<script>
import AppIdentifier from './Identifier';
import AppDatePicker from './DatePicker.vue';
import AppMaxCC from './MaxCC.vue';
import AppMosaickingOrder from './MosaickingOrder.vue';
import AppSatellite from './Satellite.vue';
import AppUpSampling from './Upsampling.vue';
import AppDownSampling from './Downsampling.vue';
import AppTiers from './Tiers.vue';
import AppDemInstance from './DemInstance.vue';
import AppEgm from './Egm.vue';
import AppClampNegative from './ClampNegative.vue';
import AppOrbitDirection from './OrbitDirection.vue';
import AppMinQa from './MinQa.vue';

import satelliteOptions from '../js/satelliteOptions';

export default {
    components: {
        AppDatePicker,
        AppMaxCC,
        AppMosaickingOrder,
        AppSatellite,
        AppUpSampling,
        AppDownSampling,
        AppTiers,
        AppDemInstance,
        AppEgm,
        AppClampNegative,
        AppOrbitDirection,
        AppMinQa,
        AppIdentifier,
    },

    props: ['namespace', 'lengthInput'],

    data() {
        return {
            satelliteOptions,
            show: false,
        };
    },

    computed: {
        satellite() {
            return this.$store.state[this.namespace].satellite;
        },
    },

    methods: {
        toggleOptions() {
            if (this.show === false) {
                this.show = false;
            } else {
                this.show = true;
            }
        },
    },
};
</script>

<style></style>
