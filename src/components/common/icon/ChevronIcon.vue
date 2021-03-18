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
            type: String,
            default: "24px"
        },
        direction: {
            type: String,
            default: "left"
        },
        lineWidth: {
            type: String,
            default: "2px"
        }
    },
    computed: {
        style() {
            return {
                "--chevronColor": this.mainColor,
                "--chevronSize": this.size,
                "--chevronLineWidth": this.lineWidth
            };
        }
    }
});
</script>

<style lang="scss" scoped>
.chevron_icon {
    display: inline-block;
    position: relative;
    width: var(--chevronSize);
    height: var(--chevronSize);
    box-sizing: border-box;

    &:after {
        content: "";
        position: absolute;
        box-sizing: border-box;
        border: solid var(--chevronColor);
        border-width: 0 var(--chevronLineWidth) var(--chevronLineWidth) 0;
        border-bottom-right-radius: 2px;
        padding: calc(calc(var(--chevronSize) - var(--chevronLineWidth)) / 3);
        top: 50%;
        left: 50%;
        transform: translate(-25%, -50%) rotate(135deg);
    }

    &.top:after {
        transform: translate(-50%, -25%) rotate(-135deg);
    }

    &.right:after {
        transform: translate(-75%, -50%) rotate(-45deg);
    }

    &.bottom:after {
        transform: translate(-50%, -75%) rotate(45deg);
    }
}
</style>
