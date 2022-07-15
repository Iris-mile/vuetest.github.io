import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import store from "./store";
import "@/assets/css/var.css";

Vue.use(ElementUI);
// 引入字体图标样式
import "@/assets/fonts/iconfont.css";

import echarts from "@/common/echart";
Vue.prototype.$echarts = echarts;

console.log(process.env.NODE_ENV);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
