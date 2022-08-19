import Vue from 'vue'
import App from './App.vue'
import  './plugin/message.js'
import 'sakura.css'

// https://www.npmjs.com/package/vue-hljs
import vueHljs from "vue-hljs";
import hljs from "highlight.js";
import "vue-hljs/dist/style.css";

Vue.use(vueHljs, { hljs })
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
