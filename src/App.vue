<template>
    <div id="app">
        <nav class="left_bar">
            Howie
            <a
                v-for="link in menu"
                :key="link.route"
                :class="['nav_link', { active: $route.path === link.route }]"
                :href="`${preLink}${link.route}`"
                >{{ link.label }}</a
            >
        </nav>
        <router-view class="main"></router-view>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            preLink: "",
            menu: [
                { label: "BaseInput", route: "/baseInput" },
                { label: "Icon", route: "/icon" }
            ]
        };
    },
    mounted() {
        this.preLink = `${process.env.BASE_URL}#`;
    }
};
</script>

<style lang="scss">
* {
    border: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
}
#app {
    display: flex;
    .left_bar {
        position: fixed;
        overflow-y: auto;
        height: 100vh;
        width: 160px;
        background-color: #e5e7eb;
        .nav_link {
            display: block;
            color: #d97706;
            transition: 0.4s;
            text-align: center;
            padding: 16px;
            &:hover {
                color: #78350f;
            }
            &.active {
                border-top-left-radius: 40px;
                border-bottom-left-radius: 40px;
                background-color: #f3f4f6;
            }
        }
    }
    .main {
        padding: 16px 16px 16px 176px;
    }
}
</style>
