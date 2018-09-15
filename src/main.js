import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import Trend from 'vuetrend';
import vuetwemoji from 'vue-twemoji'

Vue.use(BootstrapVue)
Vue.use(Trend);
Vue.use(vuetwemoji, {
    baseUrl: 'https://twemoji.maxcdn.com/', //can set to local folder of emojis. default: https://twemoji.maxcdn.com/
    extension: '.png', //.svg, .png
    className: 'emoji', //custom className for image output
    size: '36x36' //image size
  })

new Vue({
  el: '#app',
  render: h => h(App)
})
