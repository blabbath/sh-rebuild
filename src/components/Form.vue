<template>
  <form>
    <cds-form-group>
      <app-max-CC></app-max-CC>
      <app-mosaicking-order></app-mosaicking-order>
      <app-satellite></app-satellite>
      <app-evalscript></app-evalscript>
    </cds-form-group>
  </form>
</template>

<script>
import AppMaxCC from "./MaxCC.vue";
import AppMosaickingOrder from "./MosaickingOrder.vue";
import AppSatellite from "./Satellite.vue";
import AppEvalscript from "./Evalscript.vue";

export default {
  components: {
    AppMaxCC,
    AppMosaickingOrder,
    AppSatellite,
    AppEvalscript,
  },
};
</script>

<style>
</style>