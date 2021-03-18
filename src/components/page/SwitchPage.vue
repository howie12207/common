<template>
    <div class="section">
        <div class="item">
            <div class="title">開關 Switch</div>
            <div class="sub_title">@param leftLabel 字串 (左側顯示的文字)</div>
            <div class="sub_title">@param rightLabel 字串 (右側顯示的文字)</div>
            <div class="sub_title">
                @param inactiveColor 字串 (選到左側後的背景顏色)
            </div>
            <div class="sub_title">
                @param activeColor 字串 (選到右側後的背景顏色)
            </div>
            <div class="sub_title">@param width 字串 (開關的寬度px)</div>
            <div class="sub_title">@param height 字串 (開關的高度px)</div>
            <SwitchBtn
                :left-label="leftLabel"
                :right-label="rightLabel"
                :active-color="activeColor"
                :inactive-color="inactiveColor"
                :width="width"
                :height="height"
            />
        </div>

        <div class="controller">
            <div class="controller_title">控制項</div>
            <pre class="code">{{ code }}</pre>

            <div class="item">
                <label class="controller_label">左內容 leftLabel</label>
                <input
                    :disabled="!leftLabelProps"
                    type="text"
                    class="input"
                    v-model="leftLabel"
                />
                <input
                    type="radio"
                    class="radio"
                    v-model="leftLabelProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="leftLabelProps"
                    :value="false"
                    @change="changeProps('leftLabel')"
                />
                <label>不帶入</label>
            </div>

            <div class="item">
                <label class="controller_label">右內容 rightLabel</label>
                <input
                    :disabled="!rightLabelProps"
                    type="text"
                    class="input"
                    v-model="rightLabel"
                />
                <input
                    type="radio"
                    class="radio"
                    v-model="rightLabelProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="rightLabelProps"
                    :value="false"
                    @change="changeProps('rightLabel')"
                />
                <label>不帶入</label>
            </div>

            <div class="item">
                <label class="controller_label">左側顏色 inactiveColor</label>
                <input
                    :disabled="!inactiveColorProps"
                    type="color"
                    class="input"
                    v-model="inactiveColor"
                />
                <input
                    type="radio"
                    class="radio"
                    v-model="inactiveColorProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="inactiveColorProps"
                    :value="false"
                    @change="changeProps('inactiveColor')"
                />
                <label>不帶入 ("#E5E7EB")</label>
            </div>

            <div class="item">
                <label class="controller_label">右側顏色 activeColor</label>
                <input
                    :disabled="!activeColorProps"
                    type="color"
                    class="input"
                    v-model="activeColor"
                />
                <input
                    type="radio"
                    class="radio"
                    v-model="activeColorProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="activeColorProps"
                    :value="false"
                    @change="changeProps('activeColor')"
                />
                <label>不帶入 ("#34D399")</label>
            </div>

            <div class="item">
                <label class="controller_label">寬度 width</label>
                <input
                    :disabled="!widthProps"
                    type="text"
                    class="input"
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
                <label>不帶入 ("72px")</label>
            </div>

            <div class="item">
                <label class="controller_label">高度 height</label>
                <input
                    :disabled="!heightProps"
                    type="text"
                    class="input"
                    v-model.lazy="height"
                />
                <input
                    type="radio"
                    class="radio"
                    v-model="heightProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="heightProps"
                    :value="false"
                    @change="changeProps('height')"
                />
                <label>不帶入 ("32px")</label>
            </div>
        </div>
    </div>
</template>

<script>
import SwitchBtn from "@/components/common/switchBtn/SwitchBtn";
export default {
    name: "SwitchPage",
    components: { SwitchBtn },
    data() {
        return {
            leftLabel: "關閉",
            rightLabel: "開啟",
            activeColor: "#064E3B",
            inactiveColor: "#F3F4F6",
            width: "80px",
            height: "40px",

            // 控制項
            leftLabelProps: true,
            rightLabelProps: true,
            activeColorProps: true,
            inactiveColorProps: true,
            widthProps: true,
            heightProps: true
        };
    },
    computed: {
        // 控制項
        code() {
            return `
<SwitchBtn
    ${this.leftLabelProps ? `left-label="${this.leftLabel}"` : ""}
    ${this.rightLabelProps ? `right-label="${this.rightLabel}"` : ""}
    ${this.inactiveColorProps ? `inactive-color="${this.inactiveColor}"` : ""}
    ${this.activeColorProps ? `active-color="${this.activeColor}"` : ""}
    ${this.widthProps ? `width="${this.width}"` : ""}
    ${this.heightProps ? `height="${this.height}"` : ""}
/>`;
        }
    },
    methods: {
        // 控制項
        changeProps(target) {
            this[target] = undefined;
        }
    }
};
</script>

<style scoped lang="scss"></style>
