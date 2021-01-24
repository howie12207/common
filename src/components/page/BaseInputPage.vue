<template>
    <div class="section">
        <div class="title">信箱驗證 (rules運用)</div>
        <BaseInput
            label="信箱"
            placeholder="請輸入信箱"
            v-model="mail.value"
            :is-valid.sync="mail.isValid"
            :rules="mail.rules"
        />
        <Button text="送出" :disabled="!mail.isValid" />
        <div class="title">
            比對兩者值是否相等 (onBlur, onKeyup, errorMessage運用)
        </div>
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
        <div class="title">可以為空值 (isRequire運用)</div>
        <BaseInput
            label="Line"
            placeholder="請輸入Line"
            v-model="line.value"
            :is-valid.sync="line.isValid"
            :not-required="true"
        />
        <Button
            text="送出"
            :disabled="!line.isValid || line.value.trim() === ''"
        />
        <div class="title">限制數字運用 (type number與rules運用)</div>
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
        <div class="title">label與input分兩行寫法 (multiLine運用)</div>
        <BaseInput
            label="帳號"
            placeholder="請輸入帳號"
            v-model="account.value"
            :is-valid.sync="account.isValid"
            :rules="account.rules"
            :multi-line="true"
        />
        <div class="title">不顯示清除紐 (clearBtn運用)</div>
        <BaseInput
            label="FB"
            v-model="fb.value"
            :is-valid.sync="fb.isValid"
            :not-required="true"
            :clear-btn="false"
        />
    </div>
</template>

<script>
import BaseInput from "@/components/common/baseInput/BaseInput.vue";
import Button from "@/components/common/button/Button.vue";
export default {
    name: "BaseInputPage",
    components: {
        BaseInput,
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
            }
        };
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
        }
    }
};
</script>

<style scoped lang="scss">
.title {
    color: #92400e;
    margin: 8px 0;
}
.btn {
    margin: 0 0 20px 230px;
}
.base_input {
    max-width: 300px;
}
</style>
