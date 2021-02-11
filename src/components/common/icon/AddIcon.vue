<template>
    <div :style="style" class="add_icon"></div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
    name: "AddIcon",
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
                "--addColor": this.mainColor,
                "--addSize": this.size
            };
        }
    }
});
</script>

<style lang="scss" scoped>
.add_icon {
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    width: 22px;
    height: 22px;
    border: 2px solid var(--addColor);
    transform: scale(var(--addSize));
    border-radius: 50%;
}
.add_icon::after,
.add_icon::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 10px;
    height: 2px;
    background: var(--addColor);
    border-radius: 5px;
    top: 8px;
    left: 4px;
}
.add_icon::after {
    width: 2px;
    height: 10px;
    top: 4px;
    left: 8px;
}
</style>
