<template>
    <cds-select>
        <label>Mosaicking Order</label>
        <select v-model="update">
            <option
                v-for="option in satelliteOptions[satellite].mosaickingOrder"
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
                return this.$store.state[this.namespace].mosaickingOrder;
            },

            set(value) {
                this.$store.commit(
                    `${this.namespace}/SET_MOSAICKING_ORDER`,
                    value
                );
            },
        },
    },
};
</script>

<style></style>
