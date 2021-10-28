<template>
    <cds-input>
        <label>Height</label>
        <input type="number" max="1678" v-model="height" />
    </cds-input>
</template>

<script>
export default {
    computed: {
        height: {
            get() {
                return this.$store.state.shared.height;
            },

            set(value) {
                this.$store.commit(`shared/SET_HEIGHT`, value);
            },
        },
    },
};
</script>

<style></style>
