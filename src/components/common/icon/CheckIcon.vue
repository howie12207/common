<template>
    <div class="check_icon"></div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
    name: "CheckIcon",
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
    mounted() {
        document.documentElement.style.setProperty(
            "--checkColor",
            this.mainColor
        );
        document.documentElement.style.setProperty("--checkSize", this.size);
    }
});
</script>

<style lang="scss" scoped>
.check_icon {
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    transform: scale(var(--checkSize));
    width: 22px;
    height: 22px;
    border: 2px solid transparent;
    border-radius: 100px;
}
.check_icon::after {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    left: 3px;
    top: -1px;
    width: 6px;
    height: 10px;
    border-width: 0 2px 2px 0;
    border-style: solid;
    border-color: var(--checkColor);
    transform-origin: bottom left;
    transform: rotate(45deg);
}
</style>
