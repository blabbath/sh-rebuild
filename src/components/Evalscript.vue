<template>
  <cds-textarea>
    <label>Evalscript</label>
    <textarea v-model="update"></textarea>
  </cds-textarea>
</template>

<script>
export default {
  computed: {
    update: {
      get() {
        return this.$store.state.map.evalscript;
      },

      set(value) {
        this.$store.commit(`map/SET_EVALSCRIPT`, value);
      },
    },
  },
};
</script>

<style scoped>
textarea {
  height: 20rem;
  width: 40rem;
  overflow-y: scroll;
  line-break: strict;
}
</style>