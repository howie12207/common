<template>
    <div class="section">
        <div class="title">X icon (mainColor改顏色 size改大小)</div>
        <XIcon mainColor="#EF4444" :size="1" />
        <div class="title">Add icon (mainColor改顏色 size改大小)</div>
        <AddIcon mainColor="#10B981" />
        <div class="title">
            Arrow icon (direction控制方向left,right,up,down mainColor改顏色
            size改大小)
        </div>
        <ArrowIcon direction="right" mainColor="#6366F1" />
        <div class="title">
            Chevron icon (direction控制方向left,right,up,down mainColor改顏色
            size改大小)
        </div>
        <ChevronIcon direction="right" mainColor="#3B82F6" />
        <div class="title">
            Alarm icon ( mainColor改顏色 size改大小 shake為false可關閉動畫)
        </div>
        <AlarmIcon mainColor="#EF4444" />
        <div class="title">
            Bell icon ( mainColor改顏色 size改大小 shake為false可關閉動畫)
        </div>
        <BellIcon mainColor="#F59E0B" />
        <div class="title">Check icon ( mainColor改顏色 size改大小)</div>
        <CheckIcon mainColor="#10B981" />
        <div class="title">Search icon ( mainColor改顏色 size改大小)</div>
        <SearchIcon />
        <div class="title">
            Loading icon ( mainColor改顏色 size帶字串改大小)
        </div>
        <LoadingIcon size="30px" />
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
        LoadingIcon
    }
};
</script>

<style scoped lang="scss">
.title {
    color: #92400e;
    margin: 8px 0;
}
</style>
