<template>
    <p cds-text="section">GeoJSON:</p>
    <pre v-html="geojson" cds-text="body" cds-layout="p-y:lg" v-if="geojson"></pre>
    <pre cds-text="body" cds-layout="p-y:lg" v-else>[]</pre>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState('shared', ['geojson']),
    },
};
</script>

<style></style>
