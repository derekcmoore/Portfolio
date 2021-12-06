import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ScrollAnimation from "./directives/scrollAnimation";

Vue.directive("scrollAnimation", ScrollAnimation);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
