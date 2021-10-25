export default {
  SET_MAX_CC(state, values) {
    state.maxCC = values;
  },

  SET_MOSAICKING_ORDER(state, values) {
    state.mosaickingOrder = values;
  },

  SET_SATELLITE(state, values) {
    state.satellite = values;
  },

  SET_IDENTIFIER(state, identifier) {
    state.identifier = identifier;
  },

  SET_NAMESPACE(state, id) {
    state.namespace = id;
  },
};
