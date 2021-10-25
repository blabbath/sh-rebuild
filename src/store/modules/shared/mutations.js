export default {
  SET_EVALSCRIPT(state, values) {
    state.evalscript = values;
  },

  SET_AREA(state, area) {
    if (area > 10000) {
      state.area = `Polygon-Fläche: ${
        Math.round((area / 1000000) * 100) / 100
      } km<sup>2</sup>`;
    } else {
      state.area = `Polygon-Fläche: ${
        Math.round(area * 100) / 100
      } m<sup>2</sup>`;
    }
  },

  SET_GeoJSON(state, geojson) {
    geojson = geojson.map((g) => "    " + g);
    geojson = geojson.join(",<br>");
    state.geojson = `[<br>${geojson}<br>]`;
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
