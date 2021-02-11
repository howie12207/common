<template>
    <div :style="style" :class="['chevron_icon', direction]"></div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
    name: "ChevronIcon",
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
                "--chevronColor": this.mainColor,
                "--chevronSize": this.size
            };
        }
    }
});
</script>

<style lang="scss" scoped>
.chevron_icon {
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    transform: scale(var(--chevronSize));
    width: 22px;
    height: 22px;
    border: 2px solid transparent;
    border-radius: 50%;
    &::after {
        content: "";
        display: block;
        box-sizing: border-box;
        position: absolute;
        width: 10px;
        height: 10px;
        border-bottom: 2px solid var(--chevronColor);
        border-left: 2px solid var(--chevronColor);
        transform: rotate(45deg);
        left: 6px;
        top: 4px;
    }
    // 往上
    &.up {
        transform: scale(var(--chevronSize)) rotate(90deg);
    }
    // 往右
    &.right {
        transform: scale(var(--chevronSize)) rotate(180deg);
    }
    // 往下
    &.down {
        transform: scale(var(--chevronSize)) rotate(270deg);
    }
}
</style>
