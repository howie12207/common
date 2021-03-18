<template>
    <div :style="style" class="more_icon"></div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
    name: "MoreIcon",
    props: {
        mainColor: {
            type: String,
            default: "currentColor"
        },
        size: {
            type: String,
            default: "4px"
        }
    },
    computed: {
        style() {
            return {
                "--moreColor": this.mainColor,
                "--moreSize": this.size,
                "--moreMargin": `${parseFloat(this.size) * 2}px`,
                "--morePosition": `-${parseFloat(this.size) +
                    parseFloat(this.size) / 2}px`
            };
        }
    }
});
</script>

<style lang="scss" scoped>
.more_icon {
    display: inline-block;
    position: relative;
    margin: 0 var(--moreMargin);
}
.more_icon,
.more_icon::after,
.more_icon::before {
    box-sizing: border-box;
    width: var(--moreSize);
    height: var(--moreSize);
    background: var(--moreColor);
    border-radius: 50%;
}
.more_icon::after,
.more_icon::before {
    content: "";
    position: absolute;
    top: 0;
}
.more_icon::after {
    left: var(--morePosition);
}
.more_icon::before {
    right: var(--morePosition);
}
</style>
