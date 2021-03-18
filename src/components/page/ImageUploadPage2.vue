<template>
    <div>
        <transition name="fade">
            <ImageUpload v-show="showMask" @close="showMask = false" />
        </transition>

        <Button text="上傳" @click.native="showMask = true" />
    </div>
</template>

<script>
import ImageUpload from "@/components/common/imageUpload2/ImageUpload2";
import Button from "@/components/common/button/Button";
export default {
    name: "ImageUploadPage2",
    components: { ImageUpload, Button },
    data() {
        return {
            showMask: false
        };
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
