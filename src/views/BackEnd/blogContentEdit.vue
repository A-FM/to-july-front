<template>
  <el-form :model="blog" >
    <el-form-item label="标题：">
      <el-input v-model="blog.title" />
    </el-form-item>
    <el-form-item label="内容：">
      <MdEditor v-model="blog.content" :theme="this.mdEditorTheme"/>
    </el-form-item>
  </el-form>
</template>

<script>
import {MdEditor} from "md-editor-v3";
import 'md-editor-v3/lib/style.css';
import {getMdEditThemeState} from "@/assets/css/CommonJs";
export default {
  components: {MdEditor},
  data(){
    return {
      mdEditorTheme: 'dark',
      blog: {
        title: "name===",
        content: "# 标题"
      }
    }
  },
  mounted() {
    alert(getMdEditThemeState())
    this.mdEditorTheme=getMdEditThemeState()
  },
  watch() {

  }
}
</script>
