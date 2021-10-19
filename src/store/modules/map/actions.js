export default {
  SET_MAX_CC({ commit }, values) {
    commit("SET_MAX_CC", values);
  },

  SET_MOSAICKING_ORDER({ commit }, values) {
    commit("SET_MOSAICKING_ORDER", values);
  },

  SET_SATELLITE({ commit }, values) {
    commit("SET_SATELLITE", values);
  },

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
};
