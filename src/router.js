import { createRouter, createWebHistory } from "vue-router"
import Items from "./components/items/Items.vue"
import Error from "./components/Error.vue"
import Index from "./components/Index.vue"

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/Items', name: 'Items', component: Items },
        { path: '/Error', name: 'Error', component: Error },
        { path: '/Index', name: 'Index', component: Index},
    ]
})

