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

  SET_UPSAMPLING({ commit }, values) {
    commit("SET_UPSAMPLING", values);
  },

  SET_DOWNSAMPLING({ commit }, values) {
    commit("SET_DOWNSAMPLING", values);
  },

  SET_IDENTIFIER({ commit }, identifier) {
    commit("SET_IDENTIFIER", identifier);
  },

  SET_DATE_MIN({ commit }, date) {
    commit("SET_DATE_MIN", date);
  },

  SET_DATE_MAX({ commit }, date) {
    commit("SET_DATE_MAX", date);
  },

  SET_TIERS({ commit }, tier) {
    commit("SET_TIERS", tier);
  },

  SET_DEM_INSTANCE({ commit }, instance) {
    commit("SET_DEM_INSTANCE", instance);
  },

  SET_EGM({ commit }, value) {
    commit("SET_EGM", value);
  },

  SET_CLAMP_NEGATIVE({ commit }, value) {
    commit("SET_CLAMP_NEGATIVE", value);
  },

  SET_ORBIT_DIRECTION({ commit }, value) {
    commit("SET_ORBIT_DIRECTION", value);
  },

  SET_MIN_QA({ commit }, value) {
    commit("SET_MIN_QA", value);
  },

  SET_NAMESPACE({ commit }, id) {
    commit("SET_NAMESPACE", id);
  },
};
