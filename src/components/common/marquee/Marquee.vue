<template>
    <div :style="style" :class="['marquee', { stop }]">
        <div ref="marqueeContent" class="content">
            <span v-for="(item, i) in content" class="item" :key="i">{{
                item
            }}</span>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "Marquee",
    props: {
        content: {
            type: Array,
            default: () => []
        },
        step: {
            type: Number,
            default: 100
        },
        duration: {
            type: Number,
            default: 0
        },
        stop: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            width: ""
        };
    },
    computed: {
        style() {
            const time =
                this.duration > 0 ? this.duration : this.width / this.step;
            return `
                --scrollDuration: ${time}s
            `;
        }
    },
    mounted() {
        this.width =
            this.$refs.marqueeContent.clientWidth > 1000
                ? this.$refs.marqueeContent.clientWidth
                : 1000;
    }
});
</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
}
.marquee {
    --moveInitial: calc(90vw);
    --moveFinal: calc(-100%);
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    color: #8b5cf6;

    .content {
        width: fit-content;
        position: relative;
        transform: translateX(var(--moveInitial));
        animation: marquee var(--scrollDuration) linear infinite;
        animation-play-state: running;

        .item {
            padding: 0 2vw;
        }
    }

    &.stop:hover .content {
        animation-play-state: paused;
    }
}

@keyframes marquee {
    0% {
        transform: translateX(var(--moveInitial));
    }

    100% {
        transform: translateX(var(--moveFinal));
    }
}
</style>
