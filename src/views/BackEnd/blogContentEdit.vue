<template>
  <el-form :model="blog">
    <el-form-item label="标题：">
      <el-input v-model="blog.title"/>
    </el-form-item>
    <el-form-item label="内容：">
      <MdEditor v-model="blog.content" :theme="this.mdEditorTheme"/>
    </el-form-item>
    <el-form-item label="分类：">
      <el-select
          v-model="blog.labels"
          multiple
          clearable
          placeholder="Select"
          style="width: 100%"
      >
        <el-option
            v-for="item in allCategory"
            :key="item.key"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="题图：">
      <MdEditor v-model="blog.content" :theme="this.mdEditorTheme"/>
    </el-form-item>
  </el-form>
</template>

<script>
import {MdEditor} from "md-editor-v3";
import 'md-editor-v3/lib/style.css';
import {getElementUIThemeState, getMdEditThemeState} from "@/assets/css/CommonJs";
import {getBlogContentById, getCategoryList, getCategoryListByBlogId} from "@/axios/api";

export default {
  components: {MdEditor},
  data() {
    return {
      mdEditorTheme: 'dark',
      blog: {
        id: "",
        title: "name===",
        content: "# 标题",
        labels: []
      },
      allCategory: []
    }
  },
  methods: {
    getCategoryByBlogId(){
      getCategoryListByBlogId({id:this.blog.id}).then(response => {
        console.log(response)
        response.data.object.forEach(item=>{
          this.blog.labels.push(item.id)
        })
      }).catch(error => {
        this.$message.error("获取验证码失败:" + error)
      })
    },
    getCategory() {
      getCategoryList().then(response => {
        console.log(response)
        response.data.object.forEach(item=>{
          this.allCategory.push({key:item.id,label:item.categoryName,value:item.id})
        })
      }).catch(error => {
        this.$message.error("获取验证码失败:" + error)
      })
    },
    getContent() {
      getBlogContentById({id: this.blog.id}).then(response => {
        this.blog.title = response.data.object.title
        this.blog.content = response.data.object.content
      }).catch(error => {
        this.$message.error("获取验证码失败:" + error)
      })
    }
  },
  mounted() {
    this.mdEditorTheme = getMdEditThemeState(getElementUIThemeState())
    this.getContent()
    this.getCategory()
    this.getCategoryByBlogId()
  },
  created() {
    this.unwatch = this.$store.watch(
        (state) => state.theme.themeDark,
        (newThemeDark, oldThemeDark) => {
          if (newThemeDark !== oldThemeDark) {
            this.mdEditorTheme = getMdEditThemeState(newThemeDark)
          }
        }
    );
    this.blog.id = this.$route.params.id;
  },
  beforeUnmount() {
    this.unwatch();
  }
}
</script>
