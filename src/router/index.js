import Vue from "vue";
import VueRouter from "vue-router";
import BaseInputPage from "../components/page/BaseInputPage.vue";
import IconPage from "../components/page/IconPage.vue";
import PopupPage from "../components/page/PopupPage.vue";
import MarqueePage from "../components/page/MarqueePage.vue";
import MessagePage from "../components/page/MessagePage.vue";
import SwitchPage from "../components/page/SwitchPage.vue";

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
        path: "/popup",
        component: PopupPage
    },
    {
        path: "/marquee",
        component: MarqueePage
    },
    {
        path: "/message",
        component: MessagePage
    },
    {
        path: "/switch",
        component: SwitchPage
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
