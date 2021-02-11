<template>
    <div class="section">
        <div class="sub_title">@param content 陣列(要呈現的內容)</div>
        <div class="sub_title">@param duration 數字(一輪的時間)</div>
        <div class="sub_title">@param stop 需要hover暫停則代入此參數</div>
        <Marquee :content="content" :duration="30" stop />
    </div>
</template>

<script>
import Marquee from "@/components/common/marquee/Marquee";
export default {
    name: "PopupPage",
    components: { Marquee },
    data() {
        return {
            content: [
                "1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut perferendis incidunt porro aperiam atque, tempora quod fugiat repellat magnam esse architecto numquam omnis harum cum inventore non voluptatum asperiores animi?",
                "2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut perferendis incidunt porro aperiam atque, tempora quod fugiat repellat magnam esse architecto numquam omnis harum cum inventore non voluptatum asperiores animi?",
                "3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut perferendis incidunt porro aperiam atque, tempora quod fugiat repellat magnam esse architecto numquam omnis harum cum inventore non voluptatum asperiores animi?"
            ]
        };
    }
};
</script>

<style scoped lang="scss">
.section {
    width: 100%;
}
</style>
