<template>
  <cds-range cds-layout="p-y:md">
    <label>Min Qa</label>
    <input type="range" min="0" max="100" step="1" v-model="update" />
    <cds-control-message>{{ update }} %</cds-control-message>
  </cds-range>
</template>

<script>
export default {
  props: ["namespace"],

  computed: {
    update: {
      get() {
        return this.$store.state[this.namespace].minQa;
      },

      set(value) {
        this.$store.commit(`${this.namespace}/SET_MIN_QA`, value);
      },
    },
  },
};
</script>

<style></style>
