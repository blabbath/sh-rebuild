<template>
    <div>
        <p cds-text="section" cds-layout="p-b:md">Area of interest:</p>
        <p v-html="area" cds-text="body" v-if="area"></p>
        <p cds-text="caption" v-else>Draw Polygon</p>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState('shared', ['area']),
    },
};
</script>

<style></style>
