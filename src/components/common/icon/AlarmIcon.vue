<template>
    <div :class="['alarm_icon', { shake: shake }]"></div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
    name: "AlarmIcon",
    props: {
        mainColor: {
            type: String,
            default: "currentColor"
        },
        size: {
            type: Number,
            default: 1
        },
        shake: {
            type: Boolean,
            default: true
        }
    },
    mounted() {
        document.documentElement.style.setProperty(
            "--alarmColor",
            this.mainColor
        );
        document.documentElement.style.setProperty("--alarmSize", this.size);
    }
});
</script>

<style lang="scss" scoped>
.alarm_icon {
    background: linear-gradient(to left, var(--alarmColor) 5px, transparent 0)
            no-repeat 4.5px 6px/5px 2px,
        linear-gradient(to left, var(--alarmColor) 7px, transparent 0) no-repeat
            4.5px 2px/2px 6px;
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    margin: 4px;
    border: 2px solid transparent;
    transform: scale(var(--alarmSize));
    box-shadow: 0 0 0 2px var(--alarmColor);
    &.shake:hover {
        animation: 0.4s infinite shake;
    }
}
.alarm_icon::after,
.alarm_icon::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 6px;
    height: 2px;
    background: var(--alarmColor);
    top: -4px;
}
.alarm_icon::before {
    left: -5px;
    transform: rotate(-42deg);
}
.alarm_icon::after {
    transform: rotate(42deg);
    right: -5px;
}

@keyframes shake {
    25% {
        transform: scale(var(--alarmSize)) rotate(-30deg);
    }
    75% {
        transform: scale(var(--alarmSize)) rotate(30deg);
    }
}
</style>
