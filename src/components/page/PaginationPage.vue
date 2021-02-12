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
                :layout="layout"
                :background="background"
                :main-color="mainColor"
                @changeSize="changeSize"
                @changePage="changePage"
            />
        </div>

        <div class="controller">
            <div class="controller_title">控制項</div>
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
                    class="input"
                    type="text"
                    v-model.lazy="sizeOptions[0]"
                />
                <input
                    class="input"
                    type="text"
                    v-model.lazy="sizeOptions[1]"
                />
                <input
                    class="input"
                    type="text"
                    v-model.lazy="sizeOptions[2]"
                />
                <input
                    class="input"
                    type="text"
                    v-model.lazy="sizeOptions[3]"
                />
            </div>
            <div class="item">
                <label class="controller_label">版型 layout</label>
                <input class="input" type="text" v-model.lazy="layout[0]" />
                <input class="input" type="text" v-model.lazy="layout[1]" />
                <input class="input" type="text" v-model.lazy="layout[2]" />
                <input class="input" type="text" v-model.lazy="layout[3]" />
            </div>
            <div class="item">
                <label class="controller_label">主顏色 mainColor</label>
                <input class="input" type="color" v-model.lazy="mainColor" />
            </div>
            <div class="item">
                <label class="controller_label">背景色 background</label>
                <input
                    type="radio"
                    class="radio"
                    id="bgTrue"
                    v-model="background"
                    :value="true"
                />
                <label for="bgTrue">是</label>
                <input
                    type="radio"
                    class="radio"
                    id="bgFalse"
                    v-model="background"
                    :value="false"
                />
                <label for="bgFalse">否</label>
            </div>
        </div>
    </div>
</template>

<script>
import Pagination from "@/components/common/pagination/Pagination";
export default {
    name: "PaginationPage",
    components: { Pagination },
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
            background: true
        };
    },
    mounted() {
        this.pageOption = {
            page: Number(this.$route.query.page) || this.pageOption.page,
            size: Number(this.$route.query.size) || this.pageOption.size
        };
    },
    methods: {
        changeSize(size) {
            const query = { ...this.$route.query, size };
            delete query.page;
            this.pageOption.page = 1;
            this.$router.push({ query: { size } });
        },
        changePage(page) {
            const query = { ...this.$route.query, page };
            this.pageOption.page = page;
            this.$router.push({ query });
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
        changeSizeOptions(options) {
            console.log(options);
        }
    }
};
</script>

<style scoped lang="scss">
.section {
    width: 100%;

    .controller {
        margin-top: 40px;

        .controller_title {
            font-weight: 900;
            color: #4f46e5;
        }

        .controller_label {
            display: inline-block;
            width: 160px;
            font-size: 14px;
        }
    }

    .input {
        border: 1px solid #d1d5db;
        border-radius: 4px;
        margin: 0 8px;
        height: 28px;
        width: 80px;
        outline: none;
        text-align: center;
        padding: 0 8px;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }

    .radio {
        margin: 0 8px;
    }
}
</style>
