<template>
  <div cds-layout="vertical gap:md">
    <cds-date>
      <label>Start: </label>
      <input type="date" v-model="dateMin" /></cds-date
    ><cds-date>
      <label>End: </label>
      <input type="date" v-model="dateMax" :min="dateMin"
    /></cds-date>
  </div>
</template>

<script>
export default {
  props: ["namespace"],

  computed: {
    dateMin: {
      get() {
        return this.$store.state[this.namespace].dateMin;
      },
      set(date) {
        this.$store.commit(`${this.namespace}/SET_DATE_MIN`, date);
      },
    },

    dateMax: {
      get() {
        return this.$store.state[this.namespace].dateMax;
      },
      set(date) {
        this.$store.commit(`${this.namespace}/SET_DATE_MAX`, date);
      },
    },
  },
};
</script>

<style></style>
