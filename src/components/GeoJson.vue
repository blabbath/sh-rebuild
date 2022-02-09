<template>
    <p cds-text="section">GeoJSON:</p>
    <cds-textarea>
        <label>GeoJSON Input/Output</label>
        <textarea
            v-html="JSON.stringify(geometry, null, 2)"
            cds-text="body"
            id="geojson-input"
        ></textarea>
    </cds-textarea>
    <cds-button @click="parse()">Parse</cds-button>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState('shared', ['geometry']),
    },

    methods: {
        parse() {
            let geometry = document.getElementById('geojson-input').value;
            geometry = JSON.parse(geometry);
            this.$store.commit('shared/PARSE_NEW_GEOMETRY', geometry);
        },
    },
};
</script>

<style scoped>
textarea {
    width: 100%;
    height: 8rem;
}
</style>
