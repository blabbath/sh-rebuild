<template>
    <form>
        <p cds-text="section" cds-layout="p-b:md">Data Collection</p>
        <cds-form-group v-for="(id, i) in ids" :key="id" cds-layout="p-b:md">
            <app-input-group :namespace="id" :lengthInput="ids.length"
                ><div v-if="i > 0" cds-layout="p-t:md">
                    <cds-button
                        status="danger"
                        size="sm"
                        @click.prevent="removeModule(id)"
                        >Remove Input</cds-button
                    >
                </div></app-input-group
            >
        </cds-form-group>
        <div cds-layout="p-y:md">
            <cds-button size="sm" @click.prevent="addModule"
                >Add Input
            </cds-button>
        </div>
    </form>
</template>

<script>
import input from '../store/modules/input/index';
import { v4 as uuidv4 } from 'uuid';

import AppInputGroup from './InputGroup.vue';

export default {
    components: {
        AppInputGroup,
    },

    computed: {
        ids() {
            return this.$store.state.shared.inputModules;
        },
    },

    methods: {
        addModule() {
            let id = uuidv4();

            if (!this.$store.hasModule(id)) {
                this.$store.registerModule(id, input);
                this.$store.commit(`${id}/SET_NAMESPACE`, id);
                this.$store.commit(`shared/ADD_INPUT_MODULE`, id);
            }
        },

        removeModule(id) {
            if (this.$store.hasModule(id)) {
                this.$store.unregisterModule(id);
                this.$store.commit(`shared/REMOVE_INPUT_MODULE`, id);
            }
        },
    },
};
</script>

<style></style>
