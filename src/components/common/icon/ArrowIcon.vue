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
            type: String,
            default: "24px"
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
                "--arrowSize": this.size,
                "--arrowLineWidth": this.lineWidth
            };
        }
    }
});
</script>

<style lang="scss" scoped>
.arrow_icon {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    width: var(--arrowSize);
    height: var(--arrowSize);

    &:after,
    &:before {
        content: "";
        position: absolute;
        box-sizing: border-box;
        left: 3px;
    }

    &:after {
        width: calc(var(--arrowSize) / 2);
        height: calc(var(--arrowSize) / 2);
        border-bottom: 2px solid var(--arrowColor);
        border-left: 2px solid var(--arrowColor);
        transform-origin: bottom left;
        transform: rotate(45deg);
        left: 2px;
        bottom: 50%;
    }

    &:before {
        width: calc(var(--arrowSize) - 3px);
        height: 2px;
        top: 50%;
        transform: translateY(-50%);
        background-color: var(--arrowColor);
    }

    &.top {
        transform: rotate(90deg);
    }

    &.right {
        transform: rotate(180deg);
    }

    &.bottom {
        transform: rotate(270deg);
    }
}
</style>
