<template>
    <div class="base_select">
        <input class="select" readonly v-model="selectValue" type="text" />
        <!-- <select class="select" v-model="selectValue">
            <option value="">1</option>
            <option value="">2</option>
        </select> -->
    </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
    name: "BaseSelect",
    data() {
        return {
            selectValue: ""
        };
    }
});
</script>

<style lang="scss" scoped>
.base_select {
    .select {
        padding: 4px 16px;
        border-radius: 4px;
        border: 1px solid #ccc;
        outline: none;
        cursor: pointer;
        background-color: #0563af;
    }
}
</style>
