<template>
    <cds-alert-group
        status="danger"
        aria-label="Error: Request failed!"
        v-if="show"
    >
        <cds-alert
            ><div class="alert-container">
                <span>Error: Request failed!</span>
                <cds-icon
                    shape="times"
                    size="22"
                    @click="closeAlert"
                ></cds-icon>
            </div>
        </cds-alert>
    </cds-alert-group>
</template>

<script>
export default {
    data() {
        return { show: false };
    },

    computed: {
        counter() {
            return this.$store.state.shared.errorCount;
        },
    },

    watch: {
        counter() {
            this.showAlert();
        },
    },

    methods: {
        showAlert() {
            this.show = true;
        },

        closeAlert() {
            this.show = false;
        },
    },
};
</script>

<style scoped>
.alert-container {
    display: flex;
    justify-content: space-between;
}
</style>
