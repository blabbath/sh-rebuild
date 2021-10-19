<template>
  <cds-select>
    <label>Mosaicking Order</label>
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
        { name: "most Recent", value: "mostRecent" },
        { name: "least Recent", value: "leastRecent" },
        { name: "least Cloud Cover", value: "leastCC" },
      ],
    };
  },

  computed: {
    update: {
      get() {
        return this.$store.state.map.mosaickingOrder;
      },

      set(value) {
        this.$store.commit(`map/SET_MOSAICKING_ORDER`, value);
      },
    },
  },
};
</script>

<style>
</style>