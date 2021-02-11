<template>
    <div :style="style" class="search_icon"></div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
    name: "SearchIcon",
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
                "--searchColor": this.mainColor,
                "--searchSize": this.size
            };
        }
    }
});
</script>

<style lang="scss" scoped>
.search_icon {
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    transform: scale(var(--searchSize));
    width: 16px;
    height: 16px;
    border: 2px solid var(--searchColor);
    border-radius: 100%;
    margin: 0 4px 4px 0;
}
.search_icon::after {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    width: 2px;
    height: 8px;
    background: var(--searchColor);
    transform: rotate(-45deg);
    top: 10px;
    left: 12px;
}
</style>
