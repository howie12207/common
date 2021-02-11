<template>
    <div :style="style" :class="['arrow_icon', direction]"></div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
    name: "ArrowIcon",
    props: {
        mainColor: {
            type: String,
            default: "currentColor"
        },
        size: {
            type: Number,
            default: 1
        },
        direction: {
            type: String,
            default: "left"
        }
    },
    computed: {
        style() {
            return {
                "--arrowColor": this.mainColor,
                "--arrowSize": this.size
            };
        }
    }
});
</script>

<style lang="scss" scoped>
.arrow_icon {
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    transform: scale(var(--arrowSize));
    width: 22px;
    height: 22px;
    &::after,
    &::before {
        content: "";
        display: block;
        box-sizing: border-box;
        position: absolute;
        left: 3px;
    }
    &::after {
        width: 8px;
        height: 8px;
        bottom: 7px;
        border-bottom: 2px solid var(--arrowColor);
        border-left: 2px solid var(--arrowColor);
        transform: rotate(45deg);
    }
    &::before {
        width: 16px;
        height: 2px;
        bottom: 10px;
        background: var(--arrowColor);
    }
    &.up {
        transform: scale(var(--arrowSize)) rotate(90deg);
    }
    &.right {
        transform: scale(var(--arrowSize)) rotate(180deg);
    }
    &.down {
        transform: scale(var(--arrowSize)) rotate(270deg);
    }
}
</style>
