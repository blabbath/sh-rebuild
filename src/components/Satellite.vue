<template>
    <cds-select>
        <label>Input</label>
        <select v-model="update">
            <option
                v-for="option in options"
                :key="option"
                :name="option.name"
                :value="option.value"
            >
                {{ option.name }}
            </option>
        </select>
    </cds-select>
</template>

<script>
export default {
    inject: ['namespace'],

    data() {
        return {
            options: [
                { name: 'Sentinel-2 L2a', value: 'sentinel-2-l2a' },
                { name: 'Sentinel-2 L1c', value: 'sentinel-2-l1c' },
                { name: 'Landsat 8 L1', value: 'landsat-ot-l1' },
                { name: 'Landsat 8 L2', value: 'landsat-ot-l2' },
                { name: 'Landsat 4-5 TM L1', value: 'landsat-tm-l1' },
                { name: 'Landsat 4-5 TM L2', value: 'landsat-tm-l2' },
                { name: 'Landsat 1-5 MSS L1', value: 'landsat-mss-l1' },
                { name: 'Landsat 7 ETM+ L1', value: 'landsat-etm-l1' },
                { name: 'Landsat 7 ETM+ L2', value: 'landsat-etm-l2' },
                { name: 'MODIS', value: 'modis' },
                { name: 'DEM', value: 'dem' },
                { name: 'Sentinel-1-GRD', value: 'sentinel-1-grd' },
                { name: 'Sentinel-3 OLCI L1B', value: 'sentinel-3-olci' },
                { name: 'Sentinel-3 SLSTR L1B', value: 'sentinel-3-slstr' },
                { name: 'Sentinel-5P L2', value: 'sentinel-5p-l2' },
            ],
        };
    },

    computed: {
        update: {
            get() {
                return this.$store.state[this.namespace].satellite;
            },

            set(value) {
                this.$store.commit(`${this.namespace}/SET_SATELLITE`, value);
            },
        },
    },
};
</script>

<style></style>
