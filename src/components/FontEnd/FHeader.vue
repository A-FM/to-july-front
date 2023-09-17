<template>
  <el-menu
      :default-active="menuActiveIndex"
      class="el-menu-demo header-border"
      mode="horizontal"
      :ellipsis="false"
      :router="true"
  >
    <el-menu-item index="/"><p class="logo ">X-POWER</p></el-menu-item>
    <div class="flex-grow"/>
    <el-menu-item index="/">
      <el-icon>
        <HomeFilled/>
      </el-icon>
      <p class="menu-font-size">首页</p></el-menu-item>
    <el-menu-item index="2">
      <el-icon>
        <Aim/>
      </el-icon>
      <p class="menu-font-size">专题</p></el-menu-item>
    <el-menu-item index="3">
      <el-icon>
        <Memo/>
      </el-icon>
      <p class="menu-font-size">归档</p></el-menu-item>
    <el-menu-item index="4">
      <el-icon>
        <Tools/>
      </el-icon>
      <p class="menu-font-size">在线工具</p></el-menu-item>
    <el-menu-item index="5">
      <el-icon>
        <Connection/>
      </el-icon>
      <p class="menu-font-size">友情链接</p></el-menu-item>
    <el-menu-item index="6">
      <el-icon>
        <InfoFilled/>
      </el-icon>
      <p class="menu-font-size">关于</p></el-menu-item>
    <div class="flex-grow"/>
    <el-input
        v-model="searchContent"
        class="w-50 m-2 input-search"
        size="large"
        placeholder="Please Input"
        :suffix-icon="Search"
    />
    <CommonLogin/>
  </el-menu>
  <CommonLoginDialog/>
</template>

<script>
import CommonLogin from "@/components/CommonLogin.vue"
import CommonLoginDialog from "@/components/CommonLoginDialog.vue";
import {Aim, Connection, HomeFilled, InfoFilled, Memo, Search, Tools} from "@element-plus/icons-vue";

export default {
  name: 'SwitchThemes',
  computed: {
    Search() {
      return Search
    }
  },
  components: {
    InfoFilled, Connection, Tools, Memo, Aim, HomeFilled, CommonLogin,
    CommonLoginDialog
  },
  data() {
    return {
      menuActiveIndex: "/",
      searchContent: "",
    }
  }
}
</script>
<style>
.flex-grow {
  flex-grow: 1;
}

.menu-font-size {
  font-size: 18px;
}
</style>

