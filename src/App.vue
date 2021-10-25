<template>
  <app-alert-error></app-alert-error>
  <div cds-layout="grid gap:md m-y:xl">
    <div cds-layout="col@sm:4 p-y:md p-x:xl" class="form-column">
      <app-form></app-form>
      <app-evalscript></app-evalscript>
      <app-information></app-information>
    </div>
    <div cds-layout="col@sm:8 p:md p-x:xl">
      <app-map></app-map>
      <app-area></app-area>
      <app-geo-json></app-geo-json>
    </div>
  </div>
</template>

<script>
import "./cds";
import AppMap from "./components/Map.vue";
import AppArea from "./components/Area.vue";
import AppGeoJson from "./components/GeoJson.vue";
import AppForm from "./components/Form.vue";
import AppAlertError from "./components/AlertError.vue";
import AppEvalscript from "./components/Evalscript.vue";
import AppInformation from "./components/Information.vue";

export default {
  name: "App",

  components: {
    AppMap,
    AppArea,
    AppGeoJson,
    AppForm,
    AppAlertError,
    AppEvalscript,
    AppInformation,
  },
};
</script>

<style>
@import "~@cds/core/styles/module.reset.min.css";
@import "~@cds/core/styles/module.tokens.min.css";
@import "~@cds/core/styles/module.layout.min.css";
@import "~@cds/core/styles/module.typography.min.css";
@import "~@cds/core/styles/module.shims.min.css";
@import "~@cds/city/css/bundles/default.min.css";

#app {
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
