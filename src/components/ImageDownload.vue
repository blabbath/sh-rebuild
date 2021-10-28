<template>
    <a :href="imageURL" download="image"
        ><cds-button :disabled="!imageURL"
            >Download Image <cds-icon shape="download-cloud"></cds-icon
        ></cds-button>
    </a>
</template>

<script>
export default {
    computed: {
        imageURL() {
            return this.$store.state.shared.imageURL;
        },
    },
};
</script>

<style>
</style>