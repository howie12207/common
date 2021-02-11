<template>
    <div class="section">
        <div class="title">X icon</div>
        <div class="sub_title">@param mainColor 字串(顏色)</div>
        <div class="sub_title">@param size 數字(大小)</div>
        <XIcon mainColor="#EF4444" :size="1" />
        <div class="title">Add icon</div>
        <div class="sub_title">@param mainColor 字串(顏色)</div>
        <div class="sub_title">@param size 數字(大小)</div>
        <AddIcon mainColor="#10B981" />
        <div class="title">Arrow icon</div>
        <div class="sub_title">@param mainColor 字串(顏色)</div>
        <div class="sub_title">@param size 數字(大小)</div>
        <div class="sub_title">
            @param direction 字串(方向 left, right, up, down)
        </div>
        <ArrowIcon direction="right" mainColor="#6366F1" />
        <div class="title">Chevron icon</div>
        <div class="sub_title">@param mainColor 字串(顏色)</div>
        <div class="sub_title">@param size 數字(大小)</div>
        <div class="sub_title">
            @param direction 字串(方向 left, right, up, down)
        </div>
        <ChevronIcon direction="right" mainColor="#3B82F6" />
        <div class="title">Alarm icon</div>
        <div class="sub_title">@param mainColor 字串(顏色)</div>
        <div class="sub_title">@param size 數字(大小)</div>
        <div class="sub_title">@param shake 布林(是否開啟動畫)</div>
        <AlarmIcon mainColor="#EF4444" />
        <div class="title">Bell icon</div>
        <div class="sub_title">@param mainColor 字串(顏色)</div>
        <div class="sub_title">@param size 數字(大小)</div>
        <div class="sub_title">@param shake 布林(是否開啟動畫)</div>
        <BellIcon mainColor="#F59E0B" />
        <div class="title">Check icon</div>
        <div class="sub_title">@param mainColor 字串(顏色)</div>
        <div class="sub_title">@param size 數字(大小)</div>
        <CheckIcon mainColor="#10B981" />
        <div class="title">Search icon</div>
        <div class="sub_title">@param mainColor 字串(顏色)</div>
        <div class="sub_title">@param size 數字(大小)</div>
        <SearchIcon />
        <div class="title">Loading icon</div>
        <div class="sub_title">@param mainColor 字串(顏色)</div>
        <div class="sub_title">@param size 字串(大小)</div>
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

<style scoped lang="scss"></style>
