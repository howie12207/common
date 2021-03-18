<template>
    <span class="number_animation">{{ init }}</span>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "NumberAnimation",
    data() {
        return {
            init: 0
        };
    },
    props: {
        duration: {
            type: Number,
            default: 1000
        },
        finalValue: {
            type: Number,
            default: 0
        }
    },
    mounted() {
        this.NumAutoPlusAnimation();
    },
    watch: {
        finalValue() {
            this.NumAutoPlusAnimation();
        }
    },
    methods: {
        NumAutoPlusAnimation() {
            let duration = this.duration;
            let finalValue = this.finalValue;
            const INTERVALTIME = 16;
            let step = (finalValue / duration) * INTERVALTIME;
            let count = 0;
            let initial = 0;

            var timer = setInterval(() => {
                count = count + step;
                if (count >= finalValue) {
                    clearInterval(timer);
                    count = finalValue;
                }
                var t = Math.floor(count);
                if (t === initial) return;
                initial = t;
                this.init = initial;
            }, INTERVALTIME);
        }
    }
});
</script>

<style lang="scss" scoped></style>
