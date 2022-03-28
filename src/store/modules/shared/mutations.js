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
        state.geometry = geojson;
    },

    SET_WIDTH(state, width) {
        state.width = width;
        let height = state.width * state.aspectRatio;
        state.height = height.toFixed(3);
    },

    SET_HEIGHT(state, height) {
        state.height = height;
        let width = state.height / state.aspectRatio;
        state.width = width.toFixed(3);
    },

    SET_IMAGE_FORMAT(state, image) {
        state.image = image;
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

    SAVE_IMAGE(state, image) {
        state.imageURL = image;
    },

    PARSE_NEW_GEOMETRY(state, value) {
        state.geometry = value;
        console.log(state.geometry);
        state.geometryCounter = state.geometryCounter + 1;
    },
};
