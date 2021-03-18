<template>
    <div :style="style" class="x_icon"></div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
    name: "XIcon",
    props: {
        mainColor: {
            type: String,
            default: "currentColor"
        },
        size: {
            type: String,
            default: "24px"
        }
    },
    computed: {
        style() {
            return {
                "--xColor": this.mainColor,
                "--xSize": this.size
            };
        }
    }
});
</script>

<style lang="scss" scoped>
.x_icon {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    width: var(--xSize);
    height: var(--xSize);
    border: 2px solid var(--xColor);
    border-radius: 50%;

    &:after,
    &:before {
        content: "";
        box-sizing: border-box;
        position: absolute;
        width: calc(var(--xSize) - 10px);
        height: 2px;
        background: var(--xColor);
        transform: rotate(45deg);
        border-radius: 5px;
        top: calc(var(--xSize) / 2 - 3px);
        left: 3px;
    }

    &:after {
        transform: rotate(-45deg);
    }
}
</style>
