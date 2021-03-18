<template>
    <div class="section">
        <div class="item">
            <div class="title">分頁器 Pagination</div>
            <div class="sub_title">
                @param <strong>pageOption</strong> 物件 {page:當前頁面
                ,size:總數量} (皆為數字)
            </div>
            <div class="sub_title">
                @param <strong>total</strong> 數字 (所有清單數量)
            </div>
            <div class="sub_title">
                @param <strong>sizeOptions</strong> 陣列 [number,number,number]
                (一頁顯示數量)
            </div>
            <div class="sub_title">
                @param <strong>layout</strong> 陣列
                ['total','size','pager','jumper'] (要顯示的東西)
            </div>
            <div class="sub_title">
                @param <strong>mainColor</strong> 字串 (顏色)
            </div>
            <div class="sub_title">
                @param <strong>background</strong> 布林 (有此參數則會有背景色)
            </div>
            <div class="sub_title">
                @event <strong>changeSize</strong> 改變一頁數量的行為
            </div>
            <div class="sub_title">
                @event <strong>changePage</strong> 改變頁數的行為
            </div>
            <Pagination
                :page-option="pageOption"
                :total="total"
                :size-options="sizeOptions"
                :layout.sync="layout"
                :background="backgroundProps"
                :main-color="mainColor"
                :query="queryProps"
                @changeSize="changeSize"
                @changePage="changePage"
            />
        </div>

        <div class="controller">
            <div class="controller_title">控制項</div>
            <pre class="code">{{ code }}</pre>
            <div class="item">
                <label class="controller_label">總數量 total</label>
                <input
                    class="input"
                    type="number"
                    v-model.lazy.number="total"
                    @keydown="keydownNumber"
                />
            </div>

            <div class="item">
                <label class="controller_label">數量選項 sizeOptions</label>
                <input
                    :disabled="!sizeOptionsProps"
                    class="input"
                    type="text"
                    v-model.lazy="sizeOptions0"
                />
                <input
                    :disabled="!sizeOptionsProps"
                    class="input"
                    type="text"
                    v-model.lazy="sizeOptions1"
                />
                <input
                    :disabled="!sizeOptionsProps"
                    class="input"
                    type="text"
                    v-model.lazy="sizeOptions2"
                />
                <input
                    :disabled="!sizeOptionsProps"
                    class="input"
                    type="text"
                    v-model.lazy="sizeOptions3"
                />

                <input
                    type="radio"
                    class="radio"
                    v-model="sizeOptionsProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="sizeOptionsProps"
                    :value="false"
                    @change="changeProps('sizeOptions')"
                />
                <label>不帶入 ([10, 30, 50, 100])</label>
            </div>

            <div class="item">
                <label class="controller_label">版型 layout</label>
                <input
                    :disabled="!layoutProps"
                    class="input"
                    type="text"
                    v-model.lazy="layout0"
                />
                <input
                    :disabled="!layoutProps"
                    class="input"
                    type="text"
                    v-model.lazy="layout1"
                />
                <input
                    :disabled="!layoutProps"
                    class="input"
                    type="text"
                    v-model.lazy="layout2"
                />
                <input
                    :disabled="!layoutProps"
                    class="input"
                    type="text"
                    v-model.lazy="layout3"
                />

                <input
                    type="radio"
                    class="radio"
                    v-model="layoutProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="layoutProps"
                    :value="false"
                    @change="changeProps('layout')"
                />
                <label>不帶入 (["pager"])</label>
            </div>

            <div class="item">
                <label class="controller_label">主顏色 mainColor</label>
                <input
                    :disabled="!mainColorProps"
                    class="input"
                    type="color"
                    v-model.lazy="mainColor"
                />

                <input
                    type="radio"
                    class="radio"
                    v-model="mainColorProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="mainColorProps"
                    :value="false"
                    @change="changeProps('mainColor')"
                />
                <label>不帶入 ("#10b981")</label>
            </div>

            <div class="item">
                <label class="controller_label">顯示背景色 background</label>

                <input
                    type="radio"
                    class="radio"
                    v-model="backgroundProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="backgroundProps"
                    :value="false"
                />
                <label>不帶入</label>
            </div>

            <div class="item">
                <label class="controller_label"
                    >query (size與page加入url)</label
                >

                <input
                    type="radio"
                    class="radio"
                    v-model="queryProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="queryProps"
                    :value="false"
                />
                <label>不帶入</label>
            </div>
        </div>
    </div>
</template>

<script>
import Pagination from "@/components/common/pagination/Pagination";
export default {
    name: "PaginationPage",
    components: { Pagination },
    mounted() {
        this.pageOption = {
            page: Number(this.$route.query.page) || this.pageOption.page,
            size: Number(this.$route.query.size) || this.pageOption.size
        };
    },
    data() {
        return {
            pageOption: {
                page: 1,
                size: 10
            },
            total: 150,
            sizeOptions: [30, 50, 100],
            layout: ["total", "size", "pager", "jumper"],
            mainColor: "#F87171",

            // 控制項
            totalProps: true,
            sizeOptionsProps: true,
            layoutProps: true,
            mainColorProps: true,
            backgroundProps: true,
            queryProps: true
        };
    },
    computed: {
        // 控制項
        code() {
            return `
<Pagination
    :page-option="pageOption"
    total="${this.total}"
    ${
        this.sizeOptionsProps && this.sizeOptions
            ? `:size-options="[${this.sizeOptions}]"`
            : this.sizeOptionsProps
            ? `:size-options="${this.sizeOptions}"`
            : ""
    }
    ${
        this.layoutProps && this.layout
            ? `:layout="[${this.layout}]"`
            : this.layoutProps
            ? `:layout="${this.layout}"`
            : ""
    }
    ${this.mainColorProps ? `main-color="${this.mainColor}"` : ""}
    ${this.backgroundProps ? "background" : ""}
    ${this.queryProps ? "query" : ""}
    @changeSize="changeSize"
    @changePage="changePage"
/>`;
        },
        sizeOptions0: {
            get() {
                return this.sizeOptions ? this.sizeOptions[0] : "";
            },
            set(value) {
                if (!this.sizeOptions) this.sizeOptions = [];
                this.$set(this.sizeOptions, 0, value);
            }
        },
        sizeOptions1: {
            get() {
                return this.sizeOptions ? this.sizeOptions[1] : "";
            },
            set(value) {
                if (!this.sizeOptions) this.sizeOptions = [];
                this.$set(this.sizeOptions, 1, value);
            }
        },
        sizeOptions2: {
            get() {
                return this.sizeOptions ? this.sizeOptions[2] : "";
            },
            set(value) {
                if (!this.sizeOptions) this.sizeOptions = [];
                this.$set(this.sizeOptions, 2, value);
            }
        },
        sizeOptions3: {
            get() {
                return this.sizeOptions ? this.sizeOptions[3] : "";
            },
            set(value) {
                if (!this.sizeOptions) this.sizeOptions = [];
                this.$set(this.sizeOptions, 3, value);
            }
        },
        layout0: {
            get() {
                return this.layout ? this.layout[0] : "";
            },
            set(value) {
                if (!this.layout) this.layout = [];
                this.$set(this.layout, 0, value);
            }
        },
        layout1: {
            get() {
                return this.layout ? this.layout[1] : "";
            },
            set(value) {
                if (!this.layout) this.layout = [];
                this.$set(this.layout, 1, value);
            }
        },
        layout2: {
            get() {
                return this.layout ? this.layout[2] : "";
            },
            set(value) {
                if (!this.layout) this.layout = [];
                this.$set(this.layout, 2, value);
            }
        },
        layout3: {
            get() {
                return this.layout ? this.layout[3] : "";
            },
            set(value) {
                if (!this.layout) this.layout = [];
                this.$set(this.layout, 3, value);
            }
        }
    },
    methods: {
        changeSize(size) {
            console.log("size", size);
        },
        changePage(page) {
            console.log("page", page);
        },

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
}
</style>
