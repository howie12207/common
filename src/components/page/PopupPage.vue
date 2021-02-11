<template>
    <div class="section">
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
        <transition name="fade">
            <Popup
                v-if="popupOpen === 'sample'"
                width="300px"
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
    </div>
</template>

<script>
import Button from "@/components/common/button/Button";
import Popup from "@/components/common/popup/Popup";
export default {
    name: "PopupPage",
    components: { Button, Popup },
    data() {
        return {
            popupOpen: ""
        };
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
