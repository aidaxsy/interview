import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue/es'
import 'ant-design-vue/dist/antd.css'
// import  Form  from 'ant-design-vue'
import { Form } from 'ant-design-vue';
Vue.use(Form);
import axios from "axios";
Vue.prototype.axios = axios;

Vue.config.productionTip = false
Vue.use(Antd)
// Vue.use(Form)
// Vue.prototype.$form = Form

import router from './router'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
