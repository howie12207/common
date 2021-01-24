import Vue from "vue";
import VueRouter from "vue-router";
import BaseInputPage from "../components/page/BaseInputPage.vue";
import IconPage from "../components/page/IconPage.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/baseInput",
        component: BaseInputPage
    },
    {
        path: "/icon",
        component: IconPage
    },
    {
        path: "*",
        redirect: "/baseInput"
    }
];

const router = new VueRouter({
    mode: "hash",
    routes,
    base: process.env.BASE_URL
});

export default router;
