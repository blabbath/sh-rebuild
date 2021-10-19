<template>
  
<cds-range>
  <label>Max. Cloud Cover</label>
  <input type="range" min="0" max="100" step="1" v-model="update" />
  
  <cds-control-message>{{ update }} %</cds-control-message>
</cds-range>
</template>

<script>
export default {
  computed: {
    update: {
      get() {
        return this.$store.state.map.maxCC;
      },

      set(value) {
        this.$store.commit(`map/SET_MAX_CC`, value);
      },
    },
  },
};
</script>

<style></style>