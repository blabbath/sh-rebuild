<template>
    <cds-select>
        <label>Downsampling</label>
        <select v-model="update">
            <option
                v-for="option in satelliteOptions[satellite].downsampling"
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
                return this.$store.state[this.namespace].downsampling;
            },

            set(value) {
                this.$store.commit(`${this.namespace}/SET_DOWNSAMPLING`, value);
            },
        },
    },
};
</script>

<style></style>
