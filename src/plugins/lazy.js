import Vue from "vue";
import VueLazyLoad from "vue-lazyload";

import loading from "../assets/img/loading.gif";

Vue.use(VueLazyLoad, {
    preLoad: 10,
    loading: loading,
    attempt: 4,
});
