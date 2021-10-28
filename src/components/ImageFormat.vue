<template>
    <cds-select>
        <label>Image Format</label>
        <select v-model="image">
            <option
                v-for="image in images"
                :key="image"
                :name="image.name"
                :value="image.value"
            >
                {{ image.name }}
            </option>
        </select>
    </cds-select>
</template>

<script>
export default {
    data() {
        return {
            images: [
                { name: 'JPEG', value: 'image/jpeg' },
                { name: 'PNG', value: 'image/png' },
                /* { name: 'TIFF', value: 'image/tiff' },
                { name: 'APP/JSON', value: 'application/json' }, */
            ],
        };
    },

    computed: {
        image: {
            get() {
                return this.$store.state.shared.image;
            },

            set(value) {
                this.$store.commit(`shared/SET_IMAGE_FORMAT`, value);
            },
        },
    },
};
</script>

<style>
</style>