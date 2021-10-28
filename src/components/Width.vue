<template>
    <cds-input>
        <label>Width</label>
        <input type="number" max="2500" v-model="width" />
    </cds-input>
</template>

<script>
export default {
    computed: {
        width: {
            get() {
                return this.$store.state.shared.width;
            },

            set(value) {
                this.$store.commit(`shared/SET_WIDTH`, value);
            },
        },
    },
};
</script>

<style></style>
