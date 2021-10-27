<template>
    <cds-range cds-layout="p-y:md">
        <label>Max. Cloud Cover</label>
        <input type="range" min="0" max="100" step="1" v-model="update" />
        <cds-control-message>{{ update }} % </cds-control-message>
    </cds-range>
</template>

<script>
export default {
    inject: ['namespace'],

    computed: {
        update: {
            get() {
                return this.$store.state[this.namespace].maxCC;
            },

            set(value) {
                this.$store.commit(`${this.namespace}/SET_MAX_CC`, value);
            },
        },
    },
};
</script>

<style></style>
