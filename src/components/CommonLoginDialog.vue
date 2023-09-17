<template>
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
import {getCaptcha, login} from "@/axios/api";

export default {
  data() {
    return {
      codeUrl: "",
      loginForm: {
        username: "",
        password: "",
        verifyCode: "",
        uuidTime: ""
      },
      showLoginDialog:false
    }
  },
  created(){
    this.unwatch = this.$store.watch(
        (state) => state.loginDialog.openLoginDialog,
        (newThemeDark, oldThemeDark) => {
          console.log(newThemeDark,oldThemeDark)
        }
    );
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
  }
}
</script>
