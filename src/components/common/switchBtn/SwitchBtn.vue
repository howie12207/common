<template>
    <div :style="style" class="switch_section">
        <label v-if="leftLabel" class="switch_content">{{ leftLabel }}</label>
        <label class="switch_btn">
            <input class="checkbox" v-model="toggle" type="checkbox" />
            <span class="slider round"></span>
        </label>
        <label v-if="rightLabel" class="switch_content">{{ rightLabel }}</label>
    </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "SwitchBtn",
    props: {
        leftLabel: {
            type: String,
            default: ""
        },
        rightLabel: {
            type: String,
            default: ""
        },
        activeColor: {
            type: String,
            default: "#34D399"
        },
        inactiveColor: {
            type: String,
            default: "#E5E7EB"
        },
        width: {
            type: String,
            default: "72px"
        },
        height: {
            type: String,
            default: "32px"
        }
    },
    data() {
        return {
            toggle: false
        };
    },
    computed: {
        style() {
            return `
                --activeColor: ${this.activeColor};
                --inactiveColor: ${this.inactiveColor};
                --switchWidth: ${this.width};
                --switchHeight: ${this.height};
            `;
        }
    }
});
</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
}
.switch_section {
    display: flex;
    align-items: center;

    .switch_content {
        color: #1e3a8a;
        margin: 0 8px;
    }

    .switch_btn {
        position: relative;
        display: inline-block;
        width: var(--switchWidth);
        height: var(--switchHeight);

        .checkbox {
            opacity: 0;
            width: 0;
            height: 0;

            &:checked + .slider {
                background-color: var(--activeColor);
            }

            &:focus + .slider {
                box-shadow: 0 0 1px var(--activeColor);
            }

            &:checked + .slider:before {
                transform: translateX(
                    calc(var(--switchWidth) - var(--switchHeight))
                );
            }
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: var(--inactiveColor);
            transition: 0.4s;

            &::before {
                position: absolute;
                content: "";
                width: calc(var(--switchHeight) - 8px);
                height: calc(var(--switchHeight) - 8px);
                left: 4px;
                bottom: 4px;
                background-color: #fff;
                transition: 0.4s;
            }
            &.round {
                border-radius: var(--switchHeight);

                &:before {
                    border-radius: 50%;
                }
            }
        }
    }
}
</style>
