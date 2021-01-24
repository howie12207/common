<template>
    <div :class="['bell_icon', { shake: shake }]"></div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
    name: "BellIcon",
    props: {
        mainColor: {
            type: String,
            default: "currentColor"
        },
        size: {
            type: Number,
            default: 1
        },
        shake: {
            type: Boolean,
            default: true
        }
    },
    mounted() {
        document.documentElement.style.setProperty(
            "--bellColor",
            this.mainColor
        );
        document.documentElement.style.setProperty("--bellSize", this.size);
    }
});
</script>

<style lang="scss" scoped>
.bell_icon,
.bell_icon::before {
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
}
.bell_icon {
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    transform-origin: top center;
    transform: scale(var(--bellSize));
    border: 2px solid var(--bellColor);
    border-bottom: 0;
    width: 14px;
    height: 14px;
    margin: 4px 4px 8px;
    &.shake:hover {
        animation: 0.4s infinite shake;
    }
}
.bell_icon::after,
.bell_icon::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
}
.bell_icon::before {
    background: var(--bellColor);
    width: 4px;
    height: 4px;
    top: -4px;
    left: 3px;
}
.bell_icon::after {
    border-radius: 3px;
    width: 16px;
    height: 10px;
    border: 6px solid transparent;
    border-top: 1px solid transparent;
    box-shadow: inset 0 0 0 4px var(--bellColor), 0 -2px 0 0 var(--bellColor);
    top: 14px;
    left: -3px;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
}
@keyframes shake {
    25% {
        transform: scale(var(--bellSize)) rotate(-30deg);
    }
    75% {
        transform: scale(var(--bellSize)) rotate(30deg);
    }
}
</style>
