<template>
  <div cds-layout="vertical gap:md">
    <app-satellite :namespace="namespace"></app-satellite>
    <app-identifier
      v-if="lengthInput > 1"
      :namespace="namespace"
    ></app-identifier>
    <cds-toggle>
      <label>Advanced Options</label>
      <input type="checkbox" @change="toggleOptions" v-model="show" />
    </cds-toggle>
    <div v-if="show">
      <app-max-CC
        v-if="satelliteOptions[satellite].cloudCoverage"
        :namespace="namespace"
      ></app-max-CC>
      <app-mosaicking-order
        v-if="satelliteOptions[satellite].mosaickingOrder"
        :namespace="namespace"
      ></app-mosaicking-order>
    </div>
    <cds-divider></cds-divider>
  </div>
</template>

<script>
import AppMaxCC from "./MaxCC.vue";
import AppMosaickingOrder from "./MosaickingOrder.vue";
import AppSatellite from "./Satellite.vue";
import AppIdentifier from "./Identifier";

import satelliteOptions from "../js/satelliteOptions";

export default {
  components: {
    AppMaxCC,
    AppMosaickingOrder,
    AppSatellite,
    AppIdentifier,
  },

  props: ["namespace", "lengthInput"],

  data() {
    return {
      satelliteOptions,
      show: false,
    };
  },

  computed: {
    satellite() {
      return this.$store.state[this.namespace].satellite;
    },
  },

  methods: {
    toggleOptions() {
      if (this.show === false) {
        this.show = false;
      } else {
        this.show = true;
      }
    },
  },
};
</script>

<style></style>
