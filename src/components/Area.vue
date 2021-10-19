<template>
  <p v-html="area" cds-text="body" cds-layout="p-y:lg"></p>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("map", ["area"]),
  },
};
</script>

<style>
</style>