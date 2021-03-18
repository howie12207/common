<template>
    <div class="section">
        <div class="item">
            <div class="title">蓋板彈窗 Popup</div>
            <div class="sub_title">
                @param width 字串(ex: 500px or 50%)
            </div>
            <div class="sub_title">
                @param closeBtn 布林 false為關閉X按鈕 width帶字串參數 可改變大小
            </div>
            <div class="sub_title">
                @event close 為按下關閉鈕傳出的事件
            </div>
            <Button text="打開彈窗" @click.native="popupOpen = 'sample'" />
        </div>

        <transition name="fade">
            <Popup
                v-if="popupOpen === 'sample'"
                :width="width"
                :close-btn="!closeBtnProps"
                @close="popupOpen = ''"
            >
                <template #content>
                    <div class="content">
                        <div class="title">測試彈窗</div>
                        <div class="btn">
                            <Button
                                @click.native="popupOpen = ''"
                                text="確定"
                            />
                            <Button
                                @click.native="popupOpen = ''"
                                :main-color="'gray'"
                                text="取消"
                            />
                        </div>
                    </div>
                </template>
            </Popup>
        </transition>

        <div class="controller">
            <div class="controller_title">控制項</div>
            <pre class="code">{{ code }}</pre>

            <div class="item">
                <label class="controller_label">寬度 width</label>
                <input
                    :disabled="!widthProps"
                    class="input"
                    type="text"
                    v-model.lazy="width"
                />
                <input
                    type="radio"
                    class="radio"
                    v-model="widthProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="widthProps"
                    :value="false"
                    @change="changeProps('width')"
                />
                <label>不帶入 ("560px")</label>
            </div>

            <div class="item">
                <label class="controller_label">關閉按鈕 closeBtn</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="closeBtnProps"
                    :value="true"
                />
                <label>帶入參數 (並給予false)</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="closeBtnProps"
                    :value="false"
                />
                <label>不帶入</label>
            </div>
        </div>
    </div>
</template>

<script>
import Button from "@/components/common/button/Button";
import Popup from "@/components/common/popup/Popup";
export default {
    name: "PopupPage",
    components: { Button, Popup },
    computed: {
        code() {
            return `
<Popup
    v-if="popupOpen === 'sample'"
    ${this.widthProps ? `:width="${this.width}"` : ""}
    ${this.closeBtnProps ? `:close-btn="false"` : ""}
    @close="popupOpen = ''"
/>`;
        }
    },
    data() {
        return {
            popupOpen: "",
            width: "300px",

            // 控制項
            widthProps: true,
            closeBtnProps: false
        };
    },
    methods: {
        // 控制項
        changeProps(target) {
            this[target] = undefined;
        }
    }
};
</script>

<style scoped lang="scss">
.content {
    padding: 0 30px 20px;
    .title {
        text-align: center;
        font-size: 20px;
        line-height: 1.5;
        padding: 10px 0;
    }
    .btn {
        display: flex;
        justify-content: space-evenly;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
