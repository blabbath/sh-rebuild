<template>
    <app-alert-error></app-alert-error>
    <div cds-layout="grid gap:md m-y:xl">
        <div cds-layout="col@sm:5 p-y:md p-x:xl" class="form-column">
            <div cds-layout="grid cols@sm:6 gap:xl">
                <app-form></app-form>
                <app-output></app-output>
            </div>
            <app-evalscript></app-evalscript>
            <app-help></app-help>
        </div>
        <div cds-layout="col@sm:7 p:md p-x:xl">
            <app-map></app-map>
        </div>
    </div>
</template>

<script>
import './cds';
import AppMap from './components/Map.vue';
import AppAlertError from './components/AlertError.vue';
import AppForm from './components/Form.vue';
import AppOutput from './components/Output.vue';
import AppEvalscript from './components/Evalscript.vue';
import AppHelp from './components/Help.vue';

export default {
    name: 'App',

    components: {
        AppAlertError,
        AppMap,
        AppForm,
        AppOutput,
        AppEvalscript,
        AppHelp,
    },
};
</script>

<style>
@import '@cds/core/styles/module.reset.min.css';
@import '@cds/core/styles/module.tokens.min.css';
@import '@cds/core/styles/module.layout.min.css';
@import '@cds/core/styles/module.typography.min.css';
@import '@cds/core/styles/module.shims.min.css';
@import '@cds/city/css/bundles/default.min.css';

#app {
    color: #2c3e50;
    width: 100%;
    height: 100%;
}
</style>
