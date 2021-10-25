<template>
  <cds-input>
    <label>Identifier</label>
    <input type="text" placeholder="Identifier" v-model="update" />
  </cds-input>
</template>

<script>
export default {
  props: ["namespace"],

  computed: {
    update: {
      get() {
        return this.$store.state[this.namespace].identifier;
      },

      set(value) {
        this.$store.commit(`${this.namespace}/SET_IDENTIFIER`, value);
      },
    },
  },
};
</script>

<style>
</style>