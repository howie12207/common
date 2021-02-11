<template>
    <transition name="-message-fade" @after-leave="handleAfterLeave">
        <div
            v-show="visible"
            :class="['message', customClass]"
            @mouseenter="clearTimer"
            @mouseleave="startTimer"
        >
            <slot>
                <p class="message_content">{{ message }}</p>
            </slot>
        </div>
    </transition>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "Message",
    props: {
        // customClass: {
        //     type: String,
        //     default: ""
        // },
    },
    data() {
        return {
            customClass: "",
            message: "",
            showClose: true,
            visible: false,
            duration: 3000
        };
    },
    mounted() {
        this.startTimer();
    },
    methods: {
        handleAfterLeave() {
            this.$destroy(true);
            this.$el.parentNode.removeChild(this.$el);
        },
        startTimer() {},
        clearTimer() {}
    }
});
</script>

<style lang="scss" scoped></style>
