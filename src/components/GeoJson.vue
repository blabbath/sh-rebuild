<template>
    <p cds-text="section">GeoJSON:</p>
    <textarea v-html="geojson" cds-text="body" v-if="geojson"></textarea>
    <textarea cds-text="body" v-else>[]</textarea>
    <cds-button>Parse</cds-button>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState('shared', ['geojson']),
    },
};
</script>

<style scoped>
textarea {
    width: 100%;
    height: 8rem;
}
</style>
