<template>
  <cds-select>
    <label>Tiers</label>
    <select v-model="update">
      <option
        v-for="option in satelliteOptions[satellite].tiers"
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
import satelliteOptions from "../js/satelliteOptions";

export default {
  props: ["namespace"],

  data() {
    return { satelliteOptions };
  },

  computed: {
    satellite() {
      return this.$store.state[this.namespace].satellite;
    },

    update: {
      get() {
        return this.$store.state[this.namespace].tiers;
      },

      set(value) {
        this.$store.commit(`${this.namespace}/SET_TIERS`, value);
      },
    },
  },
};
</script>

<style></style>
