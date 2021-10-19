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
};
