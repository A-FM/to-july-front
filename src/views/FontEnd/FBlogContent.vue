<template>
  <h1>{{blogPost.content}}</h1>
</template>
<script>
import {getBlogContentById, getCaptcha} from "@/axios/api";

export default {
  data() {
    return {
      codeUrl:"",
      blogPost: {
        id: '',
        title: '',
        imgUrl: '',
        content: '',
        blogView: '',
        createTime: '',
        updateTime: ''
      }
    };
  },
  created() {
    this.blogPost = {
      id: this.$route.params.id,
    };
  },
  mounted() {
    this.getContent()
    this.getCode()
  },
  methods: {
    getCode() {
      getCaptcha().then(response => {
        console.log(response)
        this.codeUrl = response.data.object.pic
      })
    },
    getContent(){
      getBlogContentById({
        id: this.blogPost.id
      }).then((response)=>{
        this.blogPost = response.data.object
      }).catch(error=>{
        this.$notify.error({title:"获取数据失败~",message:error})
      })
    }
  }
};
</script>
