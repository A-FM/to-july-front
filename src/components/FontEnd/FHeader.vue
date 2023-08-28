<template>
  <el-menu
      :default-active="menuActiveIndex"
      class="el-menu-demo header-border"
      mode="horizontal"
      :ellipsis="false"
      :router="true"
      @select="handleSelect"
  >
    <el-menu-item index="logo"><p class="logo ">X-POWER</p></el-menu-item>
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
    <el-menu-item index="">
      <el-switch
          v-model="themesDarkValue"
          size="large"
          @change="handleSwitchThemesChange"
          :active-action-icon="View"
          :inactive-action-icon="Hide"
      />
    </el-menu-item>
    <el-input
        v-model="searchContent"
        class="w-50 m-2 input-search"
        size="large"
        placeholder="Please Input"
        :suffix-icon="Search"
    />
    <el-sub-menu index="">
      <template #title>
        <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </template>
      <el-menu-item @click="loginButton">Login</el-menu-item>
    </el-sub-menu>
  </el-menu>
  <el-dialog v-model="showLoginDialog" :show-close="false" title="Login" width="30%" draggable>
    <el-form
        ref="formRef"
        :model="loginForm"
        label-width="100px"
        class="demo-ruleForm"
    >
      <el-form-item label="Username" prop="Username">
        <el-input v-model="loginForm.username" type="email" clearable/>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="loginForm.password" type="password" show-password clearable/>
      </el-form-item>
      <el-form-item label="verifyCode" prop="verifyCode">
        <el-row style="width: 100%">
          <el-col :span="16">
            <el-input v-model="loginForm.verifyCode" show-password clearable/>
          </el-col>
          <el-col :span="8" style="text-align: right;">
            <el-image :src="codeUrl" @click="getCode" style="height: 30px"/>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="uuidTime" prop="uuidTime" v-show="false">
        <el-input v-model="loginForm.uuidTime"/>
      </el-form-item>
        <el-button type="primary" @click="submitButton">Submit</el-button>
        <el-button @click="this.showLoginDialog=!this.showLoginDialog">Cancel</el-button>
    </el-form>
  </el-dialog>
</template>

<script>

import {Aim, Connection, Hide, HomeFilled, InfoFilled, Memo, Search, Tools, View} from "@element-plus/icons-vue";
import {useDark, useToggle} from "@vueuse/core";
import {getCaptcha, login} from "@/axios/api";

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
      codeUrl: "",
      loginForm: {
        username: "",
        password: "",
        verifyCode: "",
        uuidTime: ""
      },
      showLoginDialog: false,
      menuActiveIndex: "1",
      searchContent: "",
      themesDarkValue: localStorage.getItem('themesDarkValue') !== null ? JSON.parse(localStorage.getItem('themesDarkValue')) : false// 默认暗黑状态
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    getCode() {
      getCaptcha().then(response => {
        console.log(response)
        this.codeUrl = response.data.object.pic
        this.loginForm.uuidTime = response.data.object.uuidTime
      })
    },
    handleSelect() {

    },
    loginButton(){
      this.showLoginDialog = !this.showLoginDialog
      this.$message.success("cececececec")
      this.getCode()
    },
    submitButton() {
      this.$message.success("登录")
      login(this.loginForm).then(response=>{
        console.log(response)
      }).catch(error=>{
        console.log(error)
      })
    },
    handleSwitchThemesChange(newValue) {
      const toggleDark = useToggle(isDark);
      toggleDark();
      localStorage.setItem('themesDarkValue', JSON.stringify(newValue));
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

