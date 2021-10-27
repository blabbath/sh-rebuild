<template>
    <cds-toggle-group layout="horizontal-inline">
        <label>Apply EGM</label>
        <cds-toggle>
            <label></label>
            <input type="checkbox" v-model="update" />
        </cds-toggle>
    </cds-toggle-group>
</template>

<script>
import satelliteOptions from '../js/satelliteOptions';

export default {
    inject: ['namespace'],

    data() {
        return { satelliteOptions };
    },

    computed: {
        satellite() {
            return this.$store.state[this.namespace].satellite;
        },

        update: {
            get() {
                return this.$store.state[this.namespace].egm;
            },

            set(value) {
                this.$store.commit(`${this.namespace}/SET_EGM`, value);
            },
        },
    },
};
</script>

<style></style>
