<template>
    <div :class="['btn', { disabled }]">{{ text }}</div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
    name: "Button",
    props: {
        text: {
            type: String,
            default: "Button"
        },
        disabled: {
            type: Boolean,
            default: false
        },
        mainColor: {
            type: String,
            default: "#10b981"
        },
        disabledColor: {
            type: String,
            default: "#d1d5db"
        }
    },
    mounted() {
        document.documentElement.style.setProperty(
            "--mainColor",
            this.mainColor
        );
        document.documentElement.style.setProperty(
            "--disabledColor",
            this.disabledColor
        );
    }
});
</script>

<style lang="scss" scoped>
.btn {
    display: inline-block;
    border: 1px solid var(--mainColor);
    color: var(--mainColor);
    padding: 4px 16px;
    cursor: pointer;
    border-radius: 4px;
    transition: 0.4s;
    &:hover {
        background-color: var(--mainColor);
        color: #fff;
    }
    &.disabled {
        border: 1px solid var(--disabledColor);
        color: var(--disabledColor);
        cursor: not-allowed;
        &:hover {
            background-color: initial;
            color: var(--disabledColor);
        }
    }
}
</style>
