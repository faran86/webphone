import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import VueAnimated from '@codekraft-studio/vue-animated'
import vuescroll from 'vuescroll';

Vue.config.productionTip = false

library.add(fas, far, fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)

//Router
Vue.use(VueRouter)
//Custom scroll
Vue.use(vuescroll)
// Install animate.css
Vue.use(VueAnimated, {
	functional: true
})
//Install BootstrapVue
Vue.use(BootstrapVue)
//Install Bootstrap icon component plugin (Optional)
Vue.use(IconsPlugin)

const router = new VueRouter({mode: 'history', routes})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
