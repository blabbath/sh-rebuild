<template>
    <cds-toggle-group layout="horizontal-inline">
        <label>Clamp Negative</label>
        <cds-toggle>
            <label></label>
            <input type="checkbox" v-model="update" />
        </cds-toggle>
    </cds-toggle-group>
</template>

<script>
import satelliteOptions from '../js/satelliteOptions';

export default {
    props: ['namespace'],

    data() {
        return { satelliteOptions };
    },

    computed: {
        satellite() {
            return this.$store.state[this.namespace].satellite;
        },

        update: {
            get() {
                return this.$store.state[this.namespace].clampNegative;
            },

            set(value) {
                this.$store.commit(
                    `${this.namespace}/SET_CLAMP_NEGATIVE`,
                    value
                );
            },
        },
    },
};
</script>

<style></style>
