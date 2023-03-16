import { createApp } from 'vue'
import './style.css'
import Pokemon from "./components/Pokemon.vue"
import router from "./router.js"
import "bootstrap/dist/css/bootstrap.css"


createApp(Pokemon).use(router).mount('#pokemon')

import "bootstrap/dist/js/bootstrap.js"