import {createRouter, createWebHistory} from "vue-router"
import Items from "./components/items/Items.vue"

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/Items', name: 'Items', component: Items }
    ]
})

