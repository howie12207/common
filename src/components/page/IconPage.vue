<template>
    <div class="section">
        <!-- X Icon -->
        <div class="item">
            <div class="title">X icon</div>
            <div class="sub_title">@param mainColor 字串(顏色)</div>
            <div class="sub_title">@param size 字串(大小 px)</div>
            <XIcon :main-color="xMainColor" :size="xSize" />
        </div>

        <div class="controller">
            <div class="controller_title">控制項</div>
            <pre class="code">{{ codeX }}</pre>
            <div class="item">
                <label class="controller_label">主顏色 mainColor</label>
                <input
                    :disabled="!xMainColorProps"
                    class="input"
                    type="color"
                    v-model="xMainColor"
                />
                <input
                    type="radio"
                    class="radio"
                    v-model="xMainColorProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="xMainColorProps"
                    :value="false"
                    @change="changeProps('xMainColor')"
                />
                <label>不帶入 (currentColor)</label>
            </div>

            <div class="item">
                <label class="controller_label">大小 size</label>
                <input
                    :disabled="!xSizeProps"
                    class="input"
                    type="text"
                    v-model="xSize"
                />
                <input
                    type="radio"
                    class="radio"
                    v-model="xSizeProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="xSizeProps"
                    :value="false"
                    @change="changeProps('xSize')"
                />
                <label>不帶入 (24px)</label>
            </div>
        </div>

        <!-- Add Icon -->
        <div class="item">
            <div class="title">Add icon</div>
            <div class="sub_title">@param mainColor 字串(顏色)</div>
            <div class="sub_title">@param size 字串(大小 px))</div>
            <AddIcon :main-color="addMainColor" :size="addSize" />
        </div>

        <div class="controller">
            <div class="controller_title">控制項</div>
            <pre class="code">{{ codeAdd }}</pre>
            <div class="item">
                <label class="controller_label">主顏色 mainColor</label>
                <input
                    :disabled="!addMainColorProps"
                    class="input"
                    type="color"
                    v-model="addMainColor"
                />
                <input
                    type="radio"
                    class="radio"
                    v-model="addMainColorProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="addMainColorProps"
                    :value="false"
                    @change="changeProps('addMainColor')"
                />
                <label>不帶入 (currentColor)</label>
            </div>

            <div class="item">
                <label class="controller_label">大小 size</label>
                <input
                    :disabled="!addSizeProps"
                    class="input"
                    type="text"
                    v-model="addSize"
                />
                <input
                    type="radio"
                    class="radio"
                    v-model="addSizeProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="addSizeProps"
                    :value="false"
                    @change="changeProps('addSize')"
                />
                <label>不帶入 (24px)</label>
            </div>
        </div>

        <!-- Arrow Icon -->
        <div class="item">
            <div class="title">Arrow icon</div>
            <div class="sub_title">@param mainColor 字串(顏色)</div>
            <div class="sub_title">@param size 字串(大小 px)</div>
            <div class="sub_title">
                @param direction 字串(方向 left, right, top, bottom)
            </div>
            <ArrowIcon
                :main-color="arrowMainColor"
                :size="arrowSize"
                :direction="arrowDirection"
            />
        </div>

        <div class="controller">
            <div class="controller_title">控制項</div>
            <pre class="code">{{ codeArrow }}</pre>

            <div class="item">
                <label class="controller_label">主顏色 mainColor</label>
                <input
                    :disabled="!arrowMainColorProps"
                    class="input"
                    type="color"
                    v-model="arrowMainColor"
                />
                <input
                    type="radio"
                    class="radio"
                    v-model="arrowMainColorProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="arrowMainColorProps"
                    :value="false"
                    @change="changeProps('arrowMainColor')"
                />
                <label>不帶入 (currentColor)</label>
            </div>

            <div class="item">
                <label class="controller_label">大小 size</label>
                <input
                    :disabled="!arrowSizeProps"
                    class="input"
                    type="text"
                    v-model="arrowSize"
                />
                <input
                    type="radio"
                    class="radio"
                    v-model="arrowSizeProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="arrowSizeProps"
                    :value="false"
                    @change="changeProps('arrowSize')"
                />
                <label>不帶入 (24px)</label>
            </div>

            <div class="item">
                <label class="controller_label">方向 direction</label>
                <input
                    :disabled="!arrowDirectionProps"
                    class="input"
                    type="text"
                    v-model="arrowDirection"
                />
                <input
                    type="radio"
                    class="radio"
                    v-model="arrowDirectionProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="arrowDirectionProps"
                    :value="false"
                    @change="changeProps('arrowDirection')"
                />
                <label>不帶入 (left)</label>
            </div>
        </div>

        <!-- Chevron Icon -->
        <div class="item">
            <div class="title">Chevron icon</div>
            <div class="sub_title">@param mainColor 字串(顏色)</div>
            <div class="sub_title">@param size 字串(大小 px)</div>
            <div class="sub_title">
                @param direction 字串(方向 left, right, top, bottom)
            </div>
            <div class="sub_title">@param lineWidth 線寬(大小 px)</div>
            <ChevronIcon
                :main-color="chevronMainColor"
                :size="chevronSize"
                :direction="chevronDirection"
                :line-width="chevronLineWidth"
            />
        </div>

        <div class="controller">
            <div class="controller_title">控制項</div>
            <pre class="code">{{ codeChevron }}</pre>

            <div class="item">
                <label class="controller_label">主顏色 mainColor</label>
                <input
                    :disabled="!chevronMainColorProps"
                    class="input"
                    type="color"
                    v-model="chevronMainColor"
                />
                <input
                    type="radio"
                    class="radio"
                    v-model="chevronMainColorProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="chevronMainColorProps"
                    :value="false"
                    @change="changeProps('chevronMainColor')"
                />
                <label>不帶入 (currentColor)</label>
            </div>

            <div class="item">
                <label class="controller_label">大小 size</label>
                <input
                    :disabled="!chevronSizeProps"
                    class="input"
                    type="text"
                    v-model="chevronSize"
                />
                <input
                    type="radio"
                    class="radio"
                    v-model="chevronSizeProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="chevronSizeProps"
                    :value="false"
                    @change="changeProps('chevronSize')"
                />
                <label>不帶入 (24px)</label>
            </div>

            <div class="item">
                <label class="controller_label">方向 direction</label>
                <input
                    :disabled="!chevronDirectionProps"
                    class="input"
                    type="text"
                    v-model="chevronDirection"
                />
                <input
                    type="radio"
                    class="radio"
                    v-model="chevronDirectionProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="chevronDirectionProps"
                    :value="false"
                    @change="changeProps('chevronDirection')"
                />
                <label>不帶入 (left)</label>
            </div>

            <div class="item">
                <label class="controller_label">線寬 lineWidth</label>
                <input
                    :disabled="!chevronLineWidthProps"
                    class="input"
                    type="text"
                    v-model="chevronLineWidth"
                />
                <input
                    type="radio"
                    class="radio"
                    v-model="chevronLineWidthProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="chevronLineWidthProps"
                    :value="false"
                    @change="changeProps('chevronLineWidth')"
                />
                <label>不帶入 (2px)</label>
            </div>
        </div>

        <!-- Alarm Icon -->
        <div class="item">
            <div class="title">Alarm icon</div>
            <div class="sub_title">@param mainColor 字串(顏色)</div>
            <div class="sub_title">@param size 數字(大小)</div>
            <div class="sub_title">@param shake 布林(是否開啟動畫)</div>
            <AlarmIcon main-color="#EF4444" />
        </div>

        <!-- Bell Icon -->
        <div class="item">
            <div class="title">Bell icon</div>
            <div class="sub_title">@param mainColor 字串(顏色)</div>
            <div class="sub_title">@param size 數字(大小)</div>
            <div class="sub_title">@param shake 布林(是否開啟動畫)</div>
            <BellIcon mainColor="#F59E0B" />
        </div>

        <!-- Check Icon -->
        <div class="item">
            <div class="title">Check icon</div>
            <div class="sub_title">@param mainColor 字串(顏色)</div>
            <div class="sub_title">@param size 數字(大小)</div>
            <CheckIcon mainColor="#10B981" />
        </div>

        <!-- Search Icon -->
        <div class="item">
            <div class="title">Search icon</div>
            <div class="sub_title">@param mainColor 字串(顏色)</div>
            <div class="sub_title">@param size 數字(大小)</div>
            <SearchIcon />
        </div>

        <!-- Loading Icon -->
        <div class="item">
            <div class="title">Loading icon</div>
            <div class="sub_title">@param mainColor 字串(顏色)</div>
            <div class="sub_title">@param size 字串(大小)</div>
            <LoadingIcon size="30px" />
        </div>

        <!-- More Icon -->
        <div class="item">
            <div class="title">More icon</div>
            <div class="sub_title">@param mainColor 字串(顏色)</div>
            <div class="sub_title">@param size 字串(大小px)</div>
            <MoreIcon :size="moreSize" :main-color="moreMainColor" />
        </div>

        <div class="controller">
            <div class="controller_title">控制項</div>
            <pre class="code">{{ codeMore }}</pre>
            <div class="item">
                <label class="controller_label">主顏色 mainColor</label>
                <input
                    :disabled="!moreMainColorProps"
                    class="input"
                    type="color"
                    v-model="moreMainColor"
                />
                <input
                    type="radio"
                    class="radio"
                    v-model="moreMainColorProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="moreMainColorProps"
                    :value="false"
                    @change="changeProps('moreMainColor')"
                />
                <label>不帶入 (currentColor)</label>
            </div>

            <div class="item">
                <label class="controller_label">大小 size</label>
                <input
                    :disabled="!moreSizeProps"
                    class="input"
                    type="text"
                    v-model="moreSize"
                />
                <input
                    type="radio"
                    class="radio"
                    v-model="moreSizeProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="moreSizeProps"
                    :value="false"
                    @change="changeProps('moreSize')"
                />
                <label>不帶入 (24px)</label>
            </div>
        </div>
    </div>
</template>

<script>
import XIcon from "@/components/common/icon/XIcon";
import AddIcon from "@/components/common/icon/AddIcon";
import ArrowIcon from "@/components/common/icon/ArrowIcon";
import ChevronIcon from "@/components/common/icon/ChevronIcon";
import AlarmIcon from "@/components/common/icon/AlarmIcon";
import BellIcon from "@/components/common/icon/BellIcon";
import CheckIcon from "@/components/common/icon/CheckIcon";
import SearchIcon from "@/components/common/icon/SearchIcon";
import LoadingIcon from "@/components/common/icon/LoadingIcon";
import MoreIcon from "@/components/common/icon/MoreIcon";
export default {
    name: "IconPage",
    components: {
        XIcon,
        AddIcon,
        ArrowIcon,
        ChevronIcon,
        AlarmIcon,
        BellIcon,
        CheckIcon,
        SearchIcon,
        LoadingIcon,
        MoreIcon
    },
    data() {
        return {
            // 控制項
            xMainColor: "#EF4444",
            xSize: "32px",
            addMainColor: "#EF4444",
            addSize: "32px",
            arrowDirection: "right",
            arrowMainColor: "#EF4444",
            arrowSize: "32px",
            chevronDirection: "right",
            chevronMainColor: "#EF4444",
            chevronSize: "32px",
            chevronLineWidth: "3px",
            moreMainColor: "#3B82F6",
            moreSize: "8px",

            xMainColorProps: true,
            xSizeProps: true,
            addMainColorProps: true,
            addSizeProps: true,
            arrowDirectionProps: true,
            arrowMainColorProps: true,
            arrowSizeProps: true,
            arrowLineWidthProps: true,
            chevronDirectionProps: true,
            chevronMainColorProps: true,
            chevronSizeProps: true,
            chevronLineWidthProps: true,
            moreMainColorProps: true,
            moreSizeProps: true
        };
    },
    computed: {
        codeX() {
            return `
<XIcon
    ${this.xMainColorProps ? `main-color="${this.xMainColor}"` : ""}
    ${this.xSizeProps ? `size="${this.xSize}"` : ""}
 />`;
        },

        codeAdd() {
            return `
<AddIcon
    ${this.addMainColorProps ? `main-color="${this.addMainColor}"` : ""}
    ${this.addSizeProps ? `size="${this.addSize}"` : ""}
 />`;
        },

        codeMore() {
            return `
<MoreIcon
    ${this.moreMainColorProps ? `main-color="${this.moreMainColor}"` : ""}
    ${this.moreSizeProps ? `size="${this.moreSize}"` : ""}
 />`;
        },

        codeArrow() {
            return `
<ArrowIcon
    ${this.arrowMainColorProps ? `main-color="${this.arrowMainColor}"` : ""}
    ${this.arrowSizeProps ? `size="${this.arrowSize}"` : ""}
    ${this.arrowDirectionProps ? `direction="${this.arrowDirection}"` : ""}
 />`;
        },

        codeChevron() {
            return `
<ChevronIcon
    ${this.chevronMainColorProps ? `main-color="${this.chevronMainColor}"` : ""}
    ${this.chevronSizeProps ? `size="${this.chevronSize}"` : ""}
    ${this.chevronDirectionProps ? `direction="${this.chevronDirection}"` : ""}
    ${this.chevronLineWidthProps ? `line-width="${this.chevronLineWidth}"` : ""}
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
