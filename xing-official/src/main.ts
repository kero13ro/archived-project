import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

import './assets/index.scss'
import { animate } from './plugin/directives'

import { i18n } from './plugin/locale'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const app = createApp(App)
app.directive('animate', animate)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
