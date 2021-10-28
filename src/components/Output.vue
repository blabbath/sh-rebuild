<template>
    <form cds-layout="vertical gap:md">
        <p cds-text="section">Output</p>
        <cds-form-group>
            <app-width></app-width>
            <app-height></app-height>
            <app-image-format></app-image-format>
            <app-image-download></app-image-download>
        </cds-form-group>
    </form>
</template>

<script>
import AppImageFormat from './ImageFormat.vue';
import AppWidth from './Width.vue';
import AppHeight from './Height.vue';
import AppImageDownload from './ImageDownload';

export default {
    components: { AppImageFormat, AppWidth, AppHeight, AppImageDownload },
};
</script>

<style></style>
