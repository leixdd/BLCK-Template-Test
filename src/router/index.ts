
import { createRouter, createWebHistory } from "vue-router"
import MainComponent from "../components/Main.vue";
import AboutComponent from "../components/About.vue";

const routes = [
    {path: "/", component: MainComponent},
    {path: "/about", component: AboutComponent}
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;