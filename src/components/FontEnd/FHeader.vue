<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
  >

    <el-menu-item index="0"><p class="logo ">X-POWER</p></el-menu-item>
    <div class="flex-grow"/>
    <el-menu-item index="1">
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
    <el-menu-item index="7">
      <el-switch
          v-model="themesDarkValue"
          size="large"
          @change="handleSwitchThemesChange"
          :active-action-icon="View"
          :inactive-action-icon="Hide"
      />
    </el-menu-item>
    <el-input
        v-model="input1"
        class="w-50 m-2 input-search"
        size="large"
        placeholder="Please Input"
        :suffix-icon="Search"
    />
    <el-sub-menu index="9">
      <template #title>
        <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<script>

import {Aim, Connection, Hide, HomeFilled, InfoFilled, Memo, Search, Tools, View} from "@element-plus/icons-vue";
import {useDark, useToggle} from "@vueuse/core";

const isDark = useDark()
export default {
  name: 'SwitchThemes',
  computed: {
    Search() {
      return Search
    },
    Hide() {
      return Hide
    },
    View() {
      return View
    }
  },
  components: {InfoFilled, Connection, Tools, Memo, Aim, HomeFilled},
  data() {
    return {
      themesDarkValue: localStorage.getItem('themesDarkValue') !== null ? JSON.parse(localStorage.getItem('themesDarkValue')):false// 默认暗黑状态
    }
  },
  created() {

  },
  methods: {
    handleSwitchThemesChange(value) {
      if (value) {
        const toggleDark = useToggle(isDark)
        toggleDark()
      } else {
        const toggleDark = useToggle(isDark)
        toggleDark()
      }
      localStorage.setItem('themesDarkValue', JSON.stringify(value));
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

