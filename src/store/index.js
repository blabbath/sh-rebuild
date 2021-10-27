import { createStore } from 'vuex';

import input from './modules/input/index';
import shared from './modules/shared/index';

export default createStore({
    modules: {
        input,
        shared,
    },
});
