<template>
    <div class="image_upload_mask">
        <div
            :class="['popup_content', { dragging: isDragging }]"
            @dragenter="onDragEnter"
            @dragleave="onDragLeave"
            @dragover.prevent
            @drop="onDrop"
        >
            <div v-if="closeBtn" class="x_icon" @click="closePopup"></div>
            <div v-show="image.length === 0" class="file_input">
                <div class="select_file">
                    <p>拖曳檔案或點擊上傳</p>
                </div>
                <input type="file" id="file" @change="onInputChange" />
            </div>
            <div v-show="image.length > 0" class="preview">
                <img class="preview_img" :src="image" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "imageUpload2",
    props: {
        // width: {
        //     type: String,
        //     default: "600px"
        // },
        closeBtn: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            isDragging: false,
            dragCount: 0,
            file: {},
            image: ""
        };
    },
    methods: {
        onInputChange(e) {
            console.log("inputChange");
            const file = e.target.files[0];
            this.addImage(file);
        },
        closePopup() {
            this.$emit("close");
        },
        onDragEnter(e) {
            e.preventDefault();
            this.isDragging = true;
            this.dragCount++;
            console.log("onDragEnter");
        },
        onDragLeave(e) {
            e.preventDefault();
            this.isDragging = false;
            this.dragCount--;
            console.log("onDragLeave");
        },
        onDrop(e) {
            e.preventDefault();
            e.stopPropagation();
            this.isDragging = false;

            const file = e.dataTransfer.files[0];
            this.addImage(file);
        },
        addImage(file) {
            if (!file.type.match("image.*")) {
                alert("上傳格式錯誤");
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                console.log("22");
                this.image = e.target.result;
                const image = new Image();
                image.onload = () => {
                    const { width, height } = image;
                    console.log(11, image, width, height);
                };
                image.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }
};
</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
}
.image_upload_mask {
    --xColor: #ef4444;
    --xSize: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(31, 41, 55, 0.7);
    z-index: 101;

    .file_input {
        width: 90%;
        height: 80%;
        margin: 40px auto;
        position: relative;
        text-align: center;

        .select_file,
        #file {
            width: 100%;
            height: 100%;
            // background-color: #60a5fa;
            border: 1px solid #60a5fa;
            // color: #fff;
            position: absolute;
            top: 0;
            left: 0;
            padding: 8px;
            border-radius: 4px;
            cursor: pointer;
        }

        #file {
            opacity: 0;
        }
    }

    .preview {
        width: 90%;
        height: 80%;
        margin: 40px auto;
        // width: 300px;
        // height: 300px;
        overflow: hidden;

        .preview_img {
            max-width: 100%;
            max-height: 100%;
        }
    }

    .popup_content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        // min-height: 50px;
        width: 90%;
        max-width: 800px;
        height: 400px;
        max-height: 90%;
        overflow: auto;
        background-color: #f3f4f6;
        border-radius: 5px;

        .x_icon {
            position: absolute;
            z-index: 102;
            top: 8px;
            right: 8px;
            display: inline-block;
            transform: scale(var(--xSize));
            width: 22px;
            height: 22px;
            border: 2px solid var(--xColor);
            border-radius: 50%;
            cursor: pointer;
        }
        .x_icon::after,
        .x_icon::before {
            content: "";
            display: block;
            box-sizing: border-box;
            position: absolute;
            width: 12px;
            height: 2px;
            background: var(--xColor);
            transform: rotate(45deg);
            border-radius: 5px;
            top: 8px;
            left: 3px;
        }
        .x_icon::after {
            transform: rotate(-45deg);
        }
    }
}
</style>
