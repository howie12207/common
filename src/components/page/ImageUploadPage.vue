<template>
    <div>
        <ImageUpload
            ref="cropper"
            :img="option.img"
            :outputSize="option.size"
            :outputType="option.outputType"
            :info="true"
            :full="option.full"
            :canMove="option.canMove"
            :canMoveBox="option.canMoveBox"
            :fixedBox="option.fixedBox"
            :original="option.original"
            :autoCrop="option.autoCrop"
            :autoCropWidth="option.autoCropWidth"
            :autoCropHeight="option.autoCropHeight"
            :centerBox="option.centerBox"
            :high="option.high"
            :infoTrue="option.infoTrue"
            :maxImgSize="option.maxImgSize"
            :enlarge="option.enlarge"
            :mode="option.mode"
            :limitMinSize="option.limitMinSize"
            @realTime="realTime"
            @imgLoad="imgLoad"
            @cropMoving="cropMoving"
        />
    </div>
</template>

<script>
import ImageUpload from "@/components/common/imageUpload/ImageUpload";
export default {
    name: "ImageUploadPage",
    components: { ImageUpload },
    data() {
        return {
            option: {
                img: "",
                size: 1,
                full: false,
                outputType: "png",
                canMove: true,
                fixedBox: false,
                original: false,
                canMoveBox: true,
                autoCrop: true,
                // 只有自动截图开启 宽度高度才生效
                autoCropWidth: 200,
                autoCropHeight: 150,
                centerBox: false,
                high: false,
                cropData: {},
                enlarge: 1,
                mode: "contain",
                maxImgSize: 3000,
                limitMinSize: [100, 120]
            }
        };
    },
    methods: {
        realTime(data) {
            var previews = data;
            var h = 0.5;
            var w = 0.2;
            this.previewStyle1 = {
                width: previews.w + "px",
                height: previews.h + "px",
                overflow: "hidden",
                margin: "0",
                zoom: h
            };
            this.previewStyle2 = {
                width: previews.w + "px",
                height: previews.h + "px",
                overflow: "hidden",
                margin: "0",
                zoom: w
            };
            this.previewStyle3 = {
                width: previews.w + "px",
                height: previews.h + "px",
                overflow: "hidden",
                margin: "0",
                zoom: 100 / previews.w
            };
            this.previewStyle4 = {
                width: previews.w + "px",
                height: previews.h + "px",
                overflow: "hidden",
                margin: "0",
                zoom: 100 / previews.h
            };
            this.previews = data;
        },
        imgLoad(msg) {
            console.log(msg);
        },
        cropMoving(data) {
            this.option.cropData = data;
        }
    }
};
</script>

<style scoped lang="scss"></style>
