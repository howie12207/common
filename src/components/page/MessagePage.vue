<template>
    <div>{{ showFuntion }}</div>
</template>

<script>
function confirm() {
    let a = "1";
    return a;
}
export default {
    data() {
        return {};
    },
    computed: {
        showFuntion() {
            let myFunction = confirm.toString();
            this.confirm = this.confirm.bind(this);

            return myFunction;
        }
    },
    methods: {
        confirm() {}
    }
};
</script>
