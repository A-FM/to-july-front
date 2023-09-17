<template>
  <el-menu-item index="">
    <el-switch
        v-model="themesDarkValue"
        size="large"
        @change="handleSwitchThemesChange"
    />
  </el-menu-item>
  <el-sub-menu index="">
    <template #title>
      <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
    </template>
    <el-menu-item @click="loginButton" v-show="loginAble">Login</el-menu-item>
    <el-menu-item @click="logoutButton" v-show="!loginAble">Login Out</el-menu-item>
  </el-sub-menu>
</template>
<script>
import {useDark, useToggle} from "@vueuse/core";
import {logout} from "@/axios/api";

const isDark = useDark()
export default {
  data() {
    return {
      loginAble: true,
      showLoginDialog: false,
      themesDarkValue: true// 默认暗黑状态
    }
  },
  mounted() {
    this.loginAble = localStorage.getItem("token") === null
  },
  methods: {
    handleSwitchThemesChange() {
      const toggleDark = useToggle(isDark);
      toggleDark();
      this.$store.commit('theme/setThemeDark',this.themesDarkValue)
    },
    loginButton() {
      this.$store.commit('loginDialog/setOpenLoginDialog',!this.$store.isOpenLoginDialog)
    },
    logoutButton() {
      logout().then(response => {
        this.$message.success("登出成功~");
        // localStorage.removeItem("token")
        // todo
        this.loginAble=true
        console.log(response)
      }).catch(error => {
        this.$message.error("出现错误~：" + error)
      })
    },
  }
}
</script>
