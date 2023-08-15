<template>
  <h1>{{blogPost.id}}</h1>
</template>
<script>
export default {
  data() {
    return {
      blogPost: {
        id: null,
        title: '',
        content: ''
      }
    };
  },
  created() {
    // 获取路由参数中的博文ID
    const postId = this.$route.params.id;

    // 根据博文ID从后端或其他数据源获取博文内容
    // 示例中直接使用硬编码数据
    this.blogPost = {
      id: postId,
    };
  }
};
</script>
