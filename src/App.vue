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
                // { label: "BaseSelect", route: "/baseSelect" },
                { label: "Icon", route: "/icon" },
                { label: "Popup", route: "/popup" },
                { label: "Marquee", route: "/marquee" },
                // { label: "Message", route: "/message" },
                { label: "Switch", route: "/switch" },
                { label: "Pagination", route: "/pagination" },
                { label: "NumberAnimation", route: "/numberAnimation" },
                // { label: "ImageUpload", route: "/imageUpload" },
                { label: "ImageUpload2", route: "/imageUpload2" }
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
    text-decoration: none;
    box-sizing: border-box;
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
        width: 100%;

        .title {
            font-weight: 900;
            color: #92400e;
            line-height: 20px;
        }

        .item {
            margin: 8px 0;
            position: relative;

            .sub_title {
                color: #fecaca;
                font-size: 14px;
                line-height: 20px;
            }

            .sub_title:nth-last-child(2) {
                margin-bottom: 10px;
            }
        }

        > .item:not(:nth-child(1)):before {
            content: "";
            position: absolute;
            top: -16px;
            width: 100%;
            height: 4px;
            background: #6b7280;
        }

        .controller {
            margin: 40px 0;

            .controller_title {
                font-weight: 900;
                color: #4f46e5;
            }

            .controller_label {
                display: inline-block;
                width: 160px;
                font-size: 14px;
            }

            .input {
                border: 1px solid #d1d5db;
                border-radius: 4px;
                margin: 0 8px;
                height: 28px;
                width: 120px;
                outline: none;
                text-align: center;
                padding: 0 8px;

                &[disabled="disabled"] {
                    cursor: not-allowed;
                }

                &::-webkit-outer-spin-button,
                &::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
            }

            .radio {
                margin: 0 8px;
                cursor: pointer;
            }
        }

        pre.code {
            border-radius: 4px;
            padding: 0 16px 16px;
            background: #f3f4f6;
            overflow-x: auto;
            margin: 8px 0 16px;
            letter-spacing: 0.5px;
            color: #4b5563;
        }
    }
}
</style>
