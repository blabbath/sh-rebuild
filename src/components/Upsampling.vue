<template>
  <cds-select>
    <label>Upsampling</label>
    <select  v-model="update">
      <option
        v-for="option in satelliteOptions[satellite].upsampling"
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
        return this.$store.state[this.namespace].upsampling;
      },

      set(value) {
        this.$store.commit(`${this.namespace}/SET_UPSAMPLING`, value);
      },
    },
  },
};
</script>

<style></style>
