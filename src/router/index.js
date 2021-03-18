import Vue from "vue";
import VueRouter from "vue-router";
import BaseInputPage from "../components/page/BaseInputPage.vue";
import BaseSelectPage from "../components/page/BaseSelectPage.vue";
import IconPage from "../components/page/IconPage.vue";
import PopupPage from "../components/page/PopupPage.vue";
import MarqueePage from "../components/page/MarqueePage.vue";
import MessagePage from "../components/page/MessagePage.vue";
import SwitchPage from "../components/page/SwitchPage.vue";
import PaginationPage from "../components/page/PaginationPage.vue";
import NumberAnimationPage from "../components/page/NumberAnimationPage.vue";
import ImageUploadPage from "../components/page/ImageUploadPage.vue";
import ImageUploadPage2 from "../components/page/ImageUploadPage2.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/baseInput",
        component: BaseInputPage
    },
    {
        path: "/baseSelect",
        component: BaseSelectPage
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
        path: "/pagination",
        component: PaginationPage
    },
    {
        path: "/numberAnimation",
        component: NumberAnimationPage
    },
    {
        path: "/imageUpload",
        component: ImageUploadPage
    },
    {
        path: "/imageUpload2",
        component: ImageUploadPage2
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
