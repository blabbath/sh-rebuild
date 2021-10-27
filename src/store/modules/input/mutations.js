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

    SET_UPSAMPLING(state, values) {
        state.upsampling = values;
    },

    SET_DOWNSAMPLING(state, values) {
        state.downsampling = values;
    },

    SET_IDENTIFIER(state, identifier) {
        state.identifier = identifier;
    },

    SET_DATE_MIN(state, date) {
        state.dateMin = date;
        let min = new Date(state.dateMin);
        let max = new Date(state.dateMax);
        if (min >= max) {
            let minDatePlusOneDay = min.setDate(min.getDate() + 1);
            let minDatePluOneDayFormatted = new Date(minDatePlusOneDay)
                .toISOString()
                .substring(0, 10);
            state.dateMax = minDatePluOneDayFormatted;
        }
    },

    SET_DATE_MAX(state, date) {
        state.dateMax = date;
    },

    SET_TIERS(state, tier) {
        state.tiers = tier;
    },

    SET_DEM_INSTANCE(state, instance) {
        state.demInstance = instance;
    },

    SET_EGM(state, value) {
        state.egm = value;
    },

    SET_CLAMP_NEGATIVE(state, value) {
        state.clampNegative = value;
    },

    SET_ORBIT_DIRECTION(state, value) {
        state.orbitDirection = value;
    },

    SET_MIN_QA(state, value) {
        state.minQa = value;
    },

    SET_NAMESPACE(state, id) {
        state.namespace = id;
    },
};
