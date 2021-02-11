<template>
    <div class="section">
        <div class="sub_title">@param leftLabel 字串 (左側顯示的文字)</div>
        <div class="sub_title">@param rightLabel 字串 (右側顯示的文字)</div>
        <div class="sub_title">
            @param activeColor 字串 (選到右側後的背景顏色)
        </div>
        <div class="sub_title">
            @param inactiveColor 字串 (選到左側後的背景顏色)
        </div>
        <div class="sub_title">@param width 字串 (開關的寬度px)</div>
        <div class="sub_title">@param height 字串 (開關的高度px)</div>
        <SwitchBtn
            left-label="關閉"
            right-label="開啟"
            active-color="#064E3B"
            inactive-color="#F3F4F6"
            width="80px"
            height="40px"
        />
    </div>
</template>

<script>
import SwitchBtn from "@/components/common/switchBtn/SwitchBtn";
export default {
    name: "SwitchPage",
    components: { SwitchBtn }
};
</script>

<style scoped lang="scss"></style>
