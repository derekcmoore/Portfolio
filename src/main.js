import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ScrollAnimation from "./directives/scrollAnimation";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCCFVtw77qDzwofeODZE9RoAUYiIIfwmR4",
  authDomain: "derek-s-portfolio-project.firebaseapp.com",
  databaseURL: "https://derek-s-portfolio-project.firebaseio.com",
  projectId: "derek-s-portfolio-project",
  storageBucket: "derek-s-portfolio-project.appspot.com",
  messagingSenderId: "582275669763",
  appId: "1:582275669763:web:156b092225bc23b47a1336",
  measurementId: "G-QKNVDGN6WN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// alias
Vue.prototype.$analytics = analytics;

Vue.directive("scrollAnimation", ScrollAnimation);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
