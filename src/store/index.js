import { createStore } from "vuex";

import map from "./modules/map/index";

export default createStore({
  modules: {
    map,
  },
});
