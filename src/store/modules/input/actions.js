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

  SET_IDENTIFIER({ commit }, identifier) {
    commit("SET_IDENTIFIER", identifier);
  },

  SET_NAMESPACE({ commit }, id) {
    commit("SET_NAMESPACE", id);
  },
};
