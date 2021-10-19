<template>
  <cds-select>
    <label>Input</label>
    <select @change="updateLayer" v-model="update">
      <option
        v-for="option in options"
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
export default {
  data() {
    return {
      options: [
        { name: "sentinel-2-l2a", value: "sentinel-2-l2a" },
        { name: "sentinel-2-l1c", value: "sentinel-2-l1c" },
        { name: "landsat-ot-l1", value: "landsat-ot-l1" },
        { name: "landsat-ot-l2", value: "landsat-ot-l2" },
        { name: "landsat-tm-l1", value: "landsat-tm-l1" },
        { name: "landsat-tm-l2", value: "landsat-tm-l2" },
        { name: "landsat-mss-l1", value: "landsat-mss-l1" },
        { name: "landsat-etm-l1", value: "landsat-etm-l1" },
        { name: "landsat-etm-l2", value: "landsat-etm-l2" },
        { name: "modis", value: "modis" },
        { name: "dem", value: "dem" },
      ],
    };
  },

  computed: {
    update: {
      get() {
        return this.$store.state.map.satellite;
      },

      set(value) {
        this.$store.commit(`map/SET_SATELLITE`, value);
      },
    },
  },
};
</script>

<style>
</style>