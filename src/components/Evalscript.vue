<template>
    <div div cds-layout="p-t:lg">
        <cds-divider></cds-divider>
        <cds-textarea cds-layout="m-y:lg">
            <label>Evalscript</label>
            <textarea v-model="update"></textarea>
        </cds-textarea>
    </div>
</template>

<script>
export default {
    computed: {
        update: {
            get() {
                return this.$store.state.shared.evalscript;
            },

            set(value) {
                this.$store.commit(`shared/SET_EVALSCRIPT`, value);
            },
        },
    },
};
</script>

<style scoped>
textarea {
    height: 20rem;
    width: 40rem;
    overflow-y: scroll;
    line-break: strict;
}
</style>
