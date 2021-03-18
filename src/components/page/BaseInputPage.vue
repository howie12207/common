<template>
    <div class="section">
        <div class="item">
            <div class="title">輸入框簡易驗證 BaseInput</div>
            <div class="sub_title">
                @param label 字串 (標籤名)
            </div>
            <div class="sub_title">
                @param placeholder 字串 (佔位符 同input placeholder)
            </div>
            <div class="sub_title">
                @param is-valid.sync 布林 (驗證用)
            </div>
            <div class="sub_title">
                @param rules 物件 (驗證規則)
            </div>
            <div class="sub_title">
                @param error-message 字串 (自訂義錯誤訊息)
            </div>
            <div class="sub_title">
                @param type 字串 (類型 同input type)
            </div>
            <div class="sub_title">
                @param disabled 布林 (禁用 同input disabled)
            </div>
            <div class="sub_title">
                @param not-required 布林 (帶入則可為空值)
            </div>
            <div class="sub_title">
                @param multi-line 布林 (帶入會將label與input分行)
            </div>
            <div class="sub_title">
                @param clear-btn 布林 (帶入並賦予false則不顯示清空按鈕)
            </div>
            <div class="sub_title">
                @event onBlur 失焦的行為
            </div>
            <div class="sub_title">
                @event onKeyup 放開按鍵的行為
            </div>
            <BaseInput
                v-model="sample.value"
                :label="sample.label"
                :placeholder="sample.placeholder"
                :is-valid.sync="sample.isValid"
                :rules="sample.rules"
                :error-message="sample.errorMessage"
                :type="sample.type"
                :disabled="disabledProps"
                :not-required="notRequiredProps"
                :multi-line="multiLineProps"
                :clear-btn="!clearBtnProps"
            />
        </div>

        <!-- 控制項 -->
        <div class="controller">
            <div class="controller_title">控制項</div>
            <pre class="code">{{ code }}</pre>

            <div class="item">
                <label class="controller_label">標籤名 label</label>
                <input
                    :disabled="!labelProps"
                    class="input"
                    type="type"
                    v-model="sample.label"
                />
                <input
                    type="radio"
                    class="radio"
                    v-model="labelProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="labelProps"
                    :value="false"
                    @change="changeProps('label')"
                />
                <label>不帶入</label>
            </div>

            <div class="item">
                <label class="controller_label">佔位符 placeholder</label>
                <input class="input" type="type" v-model="sample.placeholder" />
                <input
                    type="radio"
                    class="radio"
                    v-model="placeholderProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="placeholderProps"
                    :value="false"
                    @change="changeProps('placeholder')"
                />
                <label>不帶入</label>
            </div>

            <div class="item">
                <label class="controller_label">錯誤訊息 errorMessage</label>
                <input
                    :disabled="!errorMessageProps"
                    class="input"
                    type="type"
                    v-model="sample.errorMessage"
                />
                <input
                    type="radio"
                    class="radio"
                    v-model="errorMessageProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="errorMessageProps"
                    :value="false"
                    @change="changeProps('errorMessage')"
                />
                <label>不帶入</label>
            </div>

            <div class="item">
                <label class="controller_label">輸入類型 type</label>
                <input
                    :disabled="!typeProps"
                    class="input"
                    type="type"
                    v-model="sample.type"
                />
                <input
                    type="radio"
                    class="radio"
                    v-model="typeProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="typeProps"
                    :value="false"
                    @change="changeProps('type')"
                />
                <label>不帶入</label>
            </div>

            <div class="item">
                <label class="controller_label">禁用 disabled</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="disabledProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="disabledProps"
                    :value="false"
                />
                <label>不帶入</label>
            </div>

            <div class="item">
                <label class="controller_label">值可為空 notRequired</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="notRequiredProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="notRequiredProps"
                    :value="false"
                />
                <label>不帶入</label>
            </div>

            <div class="item">
                <label class="controller_label">分行 multiLine</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="multiLineProps"
                    :value="true"
                />
                <label>帶入參數</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="multiLineProps"
                    :value="false"
                />
                <label>不帶入</label>
            </div>

            <div class="item">
                <label class="controller_label">清除按鈕 clearBtn</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="clearBtnProps"
                    :value="true"
                />
                <label>帶入參數 (並給予false)</label>
                <input
                    type="radio"
                    class="radio"
                    v-model="clearBtnProps"
                    :value="false"
                />
                <label>不帶入</label>
            </div>
        </div>

        <!-- Email 範例 -->
        <div class="item">
            <div class="title">信箱驗證 (rules運用)</div>
            <pre class="code">{{ codeEmail }}</pre>
            <BaseInput
                label="信箱"
                placeholder="請輸入信箱"
                v-model="mail.value"
                :is-valid.sync="mail.isValid"
                :rules="mail.rules"
            />
            <Button text="送出" :disabled="!mail.isValid" />
        </div>

        <!-- compar 範例 -->
        <div class="item">
            <div class="title">
                比對兩者值是否相等 (onBlur, onKeyup, errorMessage運用)
            </div>
            <pre class="code">{{ codeCompare1 }}</pre>
            <pre class="code">{{ codeCompare2 }}</pre>
            <pre class="code">{{ confirmPasswordHandlerFunciton }}</pre>
            <BaseInput
                label="密碼"
                placeholder="請輸入密碼"
                type="password"
                v-model="password.value"
                :is-valid.sync="password.isValid"
                :rules="password.rules"
                @onKeyup="confirmPasswordHandler"
            />
            <BaseInput
                label="確認密碼"
                placeholder="請再次輸入密碼"
                type="password"
                v-model="confirmPassword.value"
                :is-valid.sync="confirmPassword.isValid"
                :rules="confirmPassword.rules"
                :error-message="confirmPassword.errorMessage"
                @onBlur="confirmPasswordHandler"
                @onKeyup="confirmPasswordHandler"
            />
            <Button
                text="送出"
                :disabled="!password.isValid || !confirmPassword.isValid"
            />
        </div>

        <!-- 空值 範例 -->
        <div class="item">
            <div class="title">可以為空值 (isRequire運用)</div>
            <pre class="code">{{ codeNotRequired }}</pre>
            <BaseInput
                label="Line"
                placeholder="請輸入Line"
                v-model="line.value"
                :is-valid.sync="line.isValid"
                not-required
            />
            <Button
                text="送出"
                :disabled="!line.isValid || line.value.trim() === ''"
            />
        </div>

        <!-- 限制數字 範例 -->
        <div class="item">
            <div class="title">限制數字運用 (type number與rules運用)</div>
            <pre class="code">{{ codeNumber }}</pre>
            <BaseInput
                label="金額"
                placeholder="請輸入金額"
                type="number"
                v-model="amount.value"
                :is-valid.sync="amount.isValid"
                :rules="amount.rules"
                :error-message="amount.errorMessage"
                @onBlur="amountHandler(amount.value)"
                @onKeyup="amountHandler(amount.value)"
            />
            <Button text="送出" :disabled="!amount.isValid" />
        </div>

        <!-- 分行 範例 -->
        <div class="item">
            <div class="title">label與input分兩行寫法 (multiLine運用)</div>
            <pre class="code">{{ codeMultiLine }}</pre>
            <BaseInput
                label="帳號"
                placeholder="請輸入帳號"
                v-model="account.value"
                :is-valid.sync="account.isValid"
                :rules="account.rules"
                multi-line
            />
        </div>

        <!-- 不顯示清除鈕 範例 -->
        <div class="item">
            <div class="title">不顯示清除紐 (clearBtn運用)</div>
            <pre class="code">{{ codeClearBtn }}</pre>
            <BaseInput
                label="FB"
                v-model="fb.value"
                :is-valid.sync="fb.isValid"
                not-required
                :clear-btn="false"
            />
        </div>

        <div class="item">
            <div class="title">另一種樣式</div>
            <BaseInput2
                label="帳號/信箱"
                placeholder="請輸入帳號或信箱"
                v-model="account2.value"
                :is-valid.sync="account2.isValid"
                :rules="account2.rules"
            />
            <BaseInput2
                label="密碼"
                placeholder="請輸入密碼"
                type="password"
                v-model="password2.value"
                :is-valid.sync="password2.isValid"
                :rules="password2.rules"
            />
        </div>
    </div>
</template>

<script>
import BaseInput from "@/components/common/baseInput/BaseInput.vue";
import BaseInput2 from "@/components/common/baseInput/BaseInput2.vue";
import Button from "@/components/common/button/Button.vue";
export default {
    name: "BaseInputPage",
    components: {
        BaseInput,
        BaseInput2,
        Button
    },
    data() {
        return {
            mail: {
                value: "",
                isValid: false,
                rules: {
                    limit: "mail"
                }
            },
            account: {
                value: "",
                isValid: false,
                rules: {
                    min: 6,
                    max: 20,
                    limit: "enAndNumber"
                }
            },
            password: {
                value: "",
                isValid: false,
                rules: {
                    min: 6,
                    max: 20,
                    limit: "enAndNumber"
                }
            },
            confirmPassword: {
                value: "",
                isValid: false,
                rules: {
                    min: 6,
                    max: 20,
                    limit: "enAndNumber"
                },
                errorMessage: ""
            },
            line: {
                value: "",
                isValid: false
            },
            amount: {
                value: "",
                isValid: false,
                rules: {
                    limit: "number"
                },
                errorMessage: ""
            },
            fb: {
                value: "",
                isValid: false
            },
            account2: {
                value: "",
                isValid: false,
                rules: {
                    min: 6,
                    max: 20,
                    limit: "enAndNumber"
                }
            },
            password2: {
                value: "",
                isValid: false,
                rules: {
                    min: 6,
                    max: 20,
                    limit: "enAndNumber"
                }
            },

            // 控制項
            sample: {
                value: "",
                label: "測試",
                placeholder: "請輸入..",
                isValid: false,
                rules: {},
                errorMessage: "",
                type: ""
            },
            labelProps: true,
            placeholderProps: true,
            errorMessageProps: false,
            typeProps: false,
            disabledProps: false,
            notRequiredProps: false,
            multiLineProps: false,
            clearBtnProps: false
        };
    },
    computed: {
        code() {
            return `
<BaseInput
    ${this.labelProps ? `label="${this.sample.label}"` : ""}
    ${this.placeholderProps ? `placeholder="${this.sample.placeholder}"` : ""}
    ${
        this.errorMessageProps
            ? `:error-message="${this.sample.errorMessage}"`
            : ""
    }
    ${this.typeProps ? `:type="${this.sample.type}"` : ""}
    ${this.disabledProps ? "disabled" : ""}
    ${this.notRequiredProps ? "not-required" : ""}
    ${this.multiLineProps ? "multi-line" : ""}
    ${this.clearBtnProps ? ':clear-btn="false"' : ""}
/>`;
        },

        codeEmail() {
            return `
<BaseInput
    label="信箱"
    placeholder="請輸入信箱"
    v-model="${this.mail.value}"
    :is-valid.sync="${this.mail.isValid}"
    :rules="${JSON.stringify(this.mail.rules)}"
/>`;
        },

        codeCompare1() {
            return `
<BaseInput
    label="密碼"
    placeholder="請輸入密碼"
    type="password"
    v-model="${this.password.value}"
    :is-valid.sync="${this.password.isValid}"
    :rules="${JSON.stringify(this.password.rules)}"
    @onKeyup="this.confirmPasswordHandler"
/>`;
        },

        codeCompare2() {
            return `
<BaseInput
    label="確認密碼"
    placeholder="請再次輸入密碼"
    type="password"
    v-model="${this.confirmPassword.value}"
    :is-valid.sync="${this.confirmPassword.isValid}"
    :rules="${JSON.stringify(this.confirmPassword.rules)}"
    :error-message="${this.confirmPassword.errorMessage}"
    @onBlur="confirmPasswordHandler"
    @onKeyup="confirmPasswordHandler"
/>`;
        },

        codeNotRequired() {
            return `
<BaseInput
    label="Line"
    placeholder="請輸入Line"
    v-model="${this.line.value}"
    :is-valid.sync="${this.line.isValid}"
    not-required
/>`;
        },

        codeNumber() {
            return `
<BaseInput
    label="金額"
    placeholder="請輸入金額"
    type="number"
    v-model="${this.amount.value}"
    :is-valid.sync="${this.amount.isValid}"
    :rules="${JSON.stringify(this.amount.rules)}"
    :error-message="${this.amount.errorMessage}"
    @onBlur="amountHandler(${this.amount.value})"
    @onKeyup="amountHandler(${this.amount.value})"
/>`;
        },

        codeMultiLine() {
            return `
<BaseInput
    label="帳號"
    placeholder="請輸入帳號"
    v-model="${this.account.value}"
    :is-valid.sync="${this.account.isValid}"
    :rules="${JSON.stringify(this.account.rules)}"
    multi-line
/>`;
        },

        codeClearBtn() {
            return `
<BaseInput
    label="FB"
    v-model="${this.fb.value}"
    :is-valid.sync="${this.fb.isValid}"
    not-required
    :clear-btn="false"
/>`;
        },

        confirmPasswordHandlerFunciton() {
            return this.$options.methods.confirmPasswordHandler;
        }
    },
    methods: {
        confirmPasswordHandler() {
            if (this.password.value !== this.confirmPassword.value) {
                this.confirmPassword.errorMessage = "密碼不一致";
                this.confirmPassword.isValid = false;
            } else {
                this.confirmPassword.errorMessage = "";
                this.confirmPassword.isValid = true;
            }
        },
        amountHandler(amount) {
            if (amount < 100 || amount > 10000) {
                this.amount.errorMessage = "金額需介於100至10000間";
                this.amount.isValid = false;
            } else {
                this.amount.errorMessage = "";
                this.amount.isValid = true;
            }
        },

        // 控制項
        changeProps(target) {
            this.sample[target] = undefined;
        }
    }
};
</script>

<style scoped lang="scss">
.btn {
    margin: 0 0 20px 230px;
}
.base_input {
    max-width: 300px;
}
</style>
