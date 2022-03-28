<template>
    <div cds-layout="vertical gap:md">
        <app-satellite></app-satellite>
        <app-identifier v-if="lengthInput > 1"></app-identifier>
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
            <app-date-picker v-if="satOptions[sat].date"></app-date-picker>
            <app-max-CC v-if="satOptions[sat].cloudCoverage"></app-max-CC>
            <app-mosaick v-if="satOptions[sat].mosaickOrder"></app-mosaick>
            <app-up-sampling></app-up-sampling>
            <app-down-sampling></app-down-sampling>
            <app-tiers v-if="satOptions[sat].tiers"></app-tiers>
            <app-egm v-if="satOptions[sat].egm"></app-egm>
            <app-clamp v-if="satOptions[sat].clampNegative"></app-clamp>
            <app-dem v-if="satOptions[sat].demInstance"></app-dem>
            <app-orbit v-if="satOptions[sat].orbitDirection"></app-orbit>
            <app-min-qa v-if="satOptions[sat].minQa"></app-min-qa>
        </div>
        <slot></slot>
        <cds-divider></cds-divider>
    </div>
</template>

<script>
import AppIdentifier from './Identifier.vue';
import AppDatePicker from './DatePicker.vue';
import AppMaxCC from './MaxCC.vue';
import AppMosaick from './MosaickingOrder.vue';
import AppSatellite from './Satellite.vue';
import AppUpSampling from './Upsampling.vue';
import AppDownSampling from './Downsampling.vue';
import AppTiers from './Tiers.vue';
import AppDem from './DemInstance.vue';
import AppEgm from './Egm.vue';
import AppClamp from './ClampNegative.vue';
import AppOrbit from './OrbitDirection.vue';
import AppMinQa from './MinQa.vue';

import satOptions from '../js/satelliteOptions';

export default {
    components: {
        AppDatePicker,
        AppMaxCC,
        AppMosaick,
        AppSatellite,
        AppUpSampling,
        AppDownSampling,
        AppTiers,
        AppDem,
        AppEgm,
        AppClamp,
        AppOrbit,
        AppMinQa,
        AppIdentifier,
    },

    props: ['namespace', 'lengthInput'],
    provide() {
        return { namespace: this.namespace };
    },

    data() {
        return {
            satOptions,
            show: false,
        };
    },

    computed: {
        sat() {
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
