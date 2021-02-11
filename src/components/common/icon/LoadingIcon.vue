<template>
    <div :style="style" class="loading_icon">
        <div class="loading_circle1 loading_circle"></div>
        <div class="loading_circle2 loading_circle"></div>
        <div class="loading_circle3 loading_circle"></div>
        <div class="loading_circle4 loading_circle"></div>
        <div class="loading_circle5 loading_circle"></div>
        <div class="loading_circle6 loading_circle"></div>
        <div class="loading_circle7 loading_circle"></div>
        <div class="loading_circle8 loading_circle"></div>
        <div class="loading_circle9 loading_circle"></div>
        <div class="loading_circle10 loading_circle"></div>
        <div class="loading_circle11 loading_circle"></div>
        <div class="loading_circle12 loading_circle"></div>
    </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
    name: "LoadingIcon",
    props: {
        mainColor: {
            type: String,
            default: "currentColor"
        },
        size: {
            type: String,
            default: "40px"
        }
    },
    computed: {
        style() {
            return {
                "--loadingColor": this.mainColor,
                "--loadingSize": this.size
            };
        }
    }
});
</script>

<style lang="scss" scoped>
.loading_icon {
    display: inline-block;
    width: var(--loadingSize);
    height: var(--loadingSize);
    position: relative;
    .loading_circle {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        &:before {
            content: "";
            display: block;
            margin: 0 auto;
            width: 15%;
            height: 15%;
            background-color: var(--loadingColor);
            border-radius: 100%;
            animation: fadeDelay 1.2s infinite ease-in-out both;
        }
        &.loading_circle2 {
            transform: rotate(30deg);
            &:before {
                animation-delay: -1.1s;
            }
        }
        &.loading_circle3 {
            transform: rotate(60deg);
            &:before {
                animation-delay: -1s;
            }
        }
        &.loading_circle4 {
            transform: rotate(90deg);
            &:before {
                animation-delay: -0.9s;
            }
        }
        &.loading_circle5 {
            transform: rotate(120deg);
            &:before {
                animation-delay: -0.8s;
            }
        }
        &.loading_circle6 {
            transform: rotate(150deg);
            &:before {
                animation-delay: -0.7s;
            }
        }
        &.loading_circle7 {
            transform: rotate(180deg);
            &:before {
                animation-delay: -0.6s;
            }
        }
        &.loading_circle8 {
            transform: rotate(210deg);
            &:before {
                animation-delay: -0.5s;
            }
        }
        &.loading_circle9 {
            transform: rotate(240deg);
            &:before {
                animation-delay: -0.4s;
            }
        }
        &.loading_circle10 {
            transform: rotate(270deg);
            &:before {
                animation-delay: -0.3s;
            }
        }
        &.loading_circle11 {
            transform: rotate(300deg);
            &:before {
                animation-delay: -0.2s;
            }
        }
        &.loading_circle12 {
            transform: rotate(330deg);
            &:before {
                animation-delay: -0.1s;
            }
        }
    }
}

@keyframes fadeDelay {
    0%,
    39%,
    100% {
        opacity: 0;
    }
    40% {
        opacity: 1;
    }
}
</style>
