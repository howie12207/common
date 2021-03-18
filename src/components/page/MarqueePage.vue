<template>
    <div class="section">
        <div class="item">
            <div class="title">捲動文字 Marquee</div>
            <div class="sub_title">@param content 陣列(要呈現的內容)</div>
            <div class="sub_title">@param duration 數字(一輪的時間)</div>
            <div class="sub_title">@param stop 需要hover暫停則代入此參數</div>
            <Marquee
                :content="content"
                :duration="duration"
                :stop="stopProps"
            />
        </div>

        <div class="controller">
            <div class="controller_title">控制項</div>
            <pre class="code">{{ code }}</pre>

            <div class="item">
                <label class="controller_label">內容 content</label>
                <input
                    class="input content_input"
                    type="text"
                    v-model.lazy="content[0]"
                />
                <input
                    class="input content_input"
                    type="text"
                    v-model.lazy="content[1]"
                />
                <input
                    class="input content_input"
                    type="text"
                    v-model.lazy="content[2]"
                />
                <input
                    class="input content_input"
                    type="text"
                    v-model.lazy="content[3]"
                />
                <input
                    class="input content_input"
                    type="text"
                    v-model.lazy="content[4]"
                />
            </div>

            <div class="item">
                <label class="controller_label">一輪時間 duration</label>
                <input
                    :disabled="!durationProps"
                    class="input"
                    type="number"
                    v-model.lazy.number="duration"
                    @keydown="keydownNumber"
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
                <label>不帶入 (30)</label>
            </div>

            <div class="item">
                <label class="controller_label">滑入時停止 stop</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="stopProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="stopProps"
                    :value="false"
                />
                <label>不帶入</label>
            </div>
        </div>
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
            ],
            duration: 30,

            // 控制項
            durationProps: true,
            stopProps: true
        };
    },
    computed: {
        // 控制項
        code() {
            return `
<Marquee
    :content="[${this.content}]"
    ${this.durationProps ? `:duration="${this.duration}"` : ""}
    ${this.stopProps ? "stop" : ""} 
/>`;
        }
    },
    methods: {
        // 控制項
        keydownNumber(e) {
            // 防止輸入 - + . e
            const keycode = [69, 107, 109, 110, 187, 189, 190];
            if (keycode.includes(e.keyCode)) {
                e.preventDefault();
                return;
            }
        },
        changeProps(target) {
            this[target] = undefined;
        }
    }
};
</script>

<style scoped lang="scss">
.section {
    width: 100%;

    .controller .input.content_input {
        text-align: left !important;
        width: 100% !important;
        margin: 8px 0 !important;
    }
}
</style>
