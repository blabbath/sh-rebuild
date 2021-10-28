export default {
    SET_EVALSCRIPT({ commit }, values) {
        commit('SET_EVALSCRIPT', values);
    },

    SET_AREA({ commit }, value) {
        commit('SET_AREA', value);
    },

    SET_GeoJSON({ commit }, value) {
        commit('SET_GeoJSON', value);
    },

    SET_WIDTH({ commit }, width) {
        commit('WIDTH', width);
    },

    SET_HEIGHT({ commit }, height) {
        commit('SET_HEIGHT', height);
    },

    SET_IMAGE_TYPE({ commit }, image) {
        commit('SET_IMAGE_TYPE', image);
    },

    ERROR_OCCURED({ commit }) {
        commit('ERROR_OCCURED');
    },

    ADD_INPUT_MODULE({ commit }, module) {
        commit('ADD_INPUT_MODULE', module);
    },

    REMOVE_INPUT_MODULE({ commit }, i) {
        commit('REMOVE_INPUT_MODULE', i);
    },

    SAVE_IMAGE({ commit }, image) {
        commit('SAVE_IMAGE', image);
    },
};
