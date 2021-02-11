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
            type: Number,
            default: 1
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
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    transform: scale(var(--xSize));
    width: 22px;
    height: 22px;
    border: 2px solid var(--xColor);
    border-radius: 50%;
}
.x_icon::after,
.x_icon::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 12px;
    height: 2px;
    background: var(--xColor);
    transform: rotate(45deg);
    border-radius: 5px;
    top: 8px;
    left: 3px;
}
.x_icon::after {
    transform: rotate(-45deg);
}
</style>
