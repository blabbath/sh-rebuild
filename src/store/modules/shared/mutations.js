export default {
    SET_EVALSCRIPT(state, values) {
        state.evalscript = values;
    },

    SET_AREA(state, area) {
        if (area > 10000) {
            state.area = `${
                Math.round((area / 1000000) * 100) / 100
            } km<sup>2</sup>`;
        } else {
            state.area = `${Math.round(area * 100) / 100} m<sup>2</sup>`;
        }
    },

    SET_GeoJSON(state, geojson) {
        let geo = JSON.stringify(geojson, null, 4);
        state.geojson = geo;
    },

    ERROR_OCCURED(state) {
        state.errorCount = state.errorCount + 1;
    },

    ADD_INPUT_MODULE(state, module) {
        state.inputModules.push(module);
    },

    REMOVE_INPUT_MODULE(state, id) {
        state.inputModules = state.inputModules.filter((i) => i !== id);
    },
};
