<template>
  <el-menu
      :default-active="menuActiveIndex"
      class="el-menu-demo header-border"
      mode="horizontal"
      :ellipsis="false"
      :router="true"
  >
    <el-menu-item index="logo"><p class="logo ">X-POWER</p></el-menu-item>
    <div class="flex-grow"/>
    <el-menu-item index="/backend">
      <el-icon>
        <TrendCharts/>
      </el-icon>
      <p class="menu-font-size">仪表盘</p></el-menu-item>
    <el-menu-item index="/backend/blogList">
      <el-icon>
        <Document/>
      </el-icon>
      <p class="menu-font-size">博文</p></el-menu-item>
    <el-menu-item index="3">
      <el-icon>
        <Memo/>
      </el-icon>
      <p class="menu-font-size">分类</p></el-menu-item>
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
      <el-menu-item @click="loginButton" v-show="loginAble">Login</el-menu-item>
      <el-menu-item @click="logoutButton" v-show="!loginAble">Login Out</el-menu-item>
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

import {
  Document,
  Connection,
  InfoFilled,
  Memo,
  TrendCharts,
  Tools
} from "@element-plus/icons-vue";
import {useDark, useToggle} from "@vueuse/core";
import {getCaptcha, login, logout} from "@/axios/api";
import {getElementUIThemeState} from "@/assets/css/CommonJs";

const isDark = useDark()
export default {
  name: 'SwitchThemes',
  components: {TrendCharts, InfoFilled, Connection, Tools, Memo, Document},
  data() {
    return {
      loginAble: true,
      codeUrl: "",
      loginForm: {
        username: "",
        password: "",
        verifyCode: "",
        uuidTime: ""
      },
      showLoginDialog: false,
      menuActiveIndex: "/backend/blogList",
      searchContent: "",
      themesDarkValue: true// 默认暗黑状态
    }
  },
  created() {

  },
  mounted() {
    this.loginAble = localStorage.getItem("token") === null
    this.themesDarkValue = getElementUIThemeState()
  },
  methods: {
    getCode() {
      getCaptcha().then(response => {
        this.codeUrl = response.data.object.pic
        this.loginForm.uuidTime = response.data.object.uuidTime
      }).catch(error => {
        this.$message.error("获取验证码失败:" + error)
      })
    },
    loginButton() {
      this.showLoginDialog = !this.showLoginDialog
      this.getCode()
    },
    logoutButton() {
      logout().then(response => {
        this.$message.success("登出成功~");
        // localStorage.removeItem("token")
        this.loginAble=true
        console.log(response)
      }).catch(error => {
        this.$message.error("出现错误~：" + error)
      })
    },
    submitButton() {
      login(this.loginForm).then(response => {
        localStorage.setItem("token", response.headers.token)
        this.loginAble=false
        this.showLoginDialog=false;
        this.$message.success("登录成功~")
      }).catch(error => {
        this.$message.error("登录失败，具体信息如下" + error)
      })
    },
    handleSwitchThemesChange() {
      const toggleDark = useToggle(isDark);
      toggleDark();
      this.$store.commit('theme/setThemeDark',this.themesDarkValue)
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

