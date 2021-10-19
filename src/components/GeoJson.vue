<template>
  <p cds-text="body">GeoJSON:</p>
  <pre v-html="geojson" cds-text="body" cds-layout="p-y:lg"></pre>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("map", ["geojson"]),
  },
};
</script>

<style>
</style>