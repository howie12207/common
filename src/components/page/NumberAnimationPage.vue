<template>
    <div class="section">
        <div class="item">
            <div class="title">數字動畫 NumberAnimation</div>
            <div class="sub_title">@param duration 數字 (動畫時間)</div>
            <div class="sub_title">@param finalValue 數字 (最終數字)</div>
            <NumberAnimation :duration="duration" :final-value="finalValue" />
        </div>
        <div class="controller">
            <div class="controller_title">控制項</div>
            <pre class="code">{{ code }}</pre>

            <div class="item">
                <label class="controller_label">動畫時間 duration</label>
                <input
                    :disabled="!durationProps"
                    type="number"
                    class="input"
                    v-model.number="duration"
                />
                <input
                    type="radio"
                    class="radio"
                    v-model="durationProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="durationProps"
                    :value="false"
                    @change="changeProps('duration')"
                />
                <label>不帶入</label>
            </div>

            <div class="item">
                <label class="controller_label">最終數字 finalValue</label>
                <input
                    type="number"
                    class="input"
                    v-model.number.lazy="finalValue"
                />
            </div>
        </div>
    </div>
</template>

<script>
import NumberAnimation from "@/components/common/numberAnimation/NumberAnimation";
export default {
    name: "NumberAnimationPage",
    components: { NumberAnimation },
    data() {
        return {
            //控制項
            duration: 2000,
            finalValue: 45849412,

            durationProps: true
        };
    },
    computed: {
        // 控制項
        code() {
            return `
<NumberAnimation
    ${this.durationProps ? `:duration="${this.duration}"` : ""}
    :final-value="${this.finalValue}"
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
