export default {
  SET_EVALSCRIPT({ commit }, values) {
    commit("SET_EVALSCRIPT", values);
  },

  SET_AREA({ commit }, value) {
    commit("SET_AREA", value);
  },

  SET_GeoJSON({ commit }, value) {
    commit("SET_GeoJSON", value);
  },

  ERROR_OCCURED({ commit }) {
    commit("ERROR_OCCURED");
  },

  ADD_INPUT_MODULE({ commit }, module) {
    commit("ADD_INPUT_MODULE", module);
  },

  REMOVE_INPUT_MODULE({ commit }, i) {
    commit("REMOVE_INPUT_MODULE", i);
  },
};
