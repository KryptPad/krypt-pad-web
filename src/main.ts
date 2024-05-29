import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/js/dist/offcanvas'
import 'bootstrap-icons/font/bootstrap-icons.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
