<template>
  <div v-for="post in blogList" :key="post.id">
    <el-card shadow="always" class="box-card">
      <el-row>
        <el-col :span="6">
          <img
              src="https://tendcode.com//media/article/upload/2023/07/10/chatgpt.png"
              style="width: 100%"
          /></el-col>
        <el-col :span="1"></el-col>
        <el-col :span="17">
          <div class="blog_card">
            <a href="https://baidu.com">{{ post.title }}</a>

          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
  <el-pagination background layout="sizes, prev, pager, next, jumper" :total="queryInfo.total" class="div-center"
                 @currentChange="handlerCurrentChange" @sizeChange="handlerSizeChange" :page-sizes="[10,20,30,40]"/>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      queryInfo: {
        total: 23,
        pageSize: 10,
        currentPage: 1,
        blogList: [],
      },
      blogList: [],
    };

  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const apiUrl = `page/${this.queryInfo.currentPage}/${this.queryInfo.pageSize}`;
      axios.get(apiUrl).then(response => {
        const responseData = response.data.object;
        this.queryInfo.blogContent = responseData.list;
        this.queryInfo.total = responseData.total;
        this.queryInfo.pageSize = responseData.pageSize;
        this.queryInfo.currentPage = responseData.pageNum;
        this.blogList = responseData.list;
      }).catch(error => {
        console.log("获取博客文章列表失败:", error);
      });
    },
    handlerCurrentChange(newPage) {
      this.queryInfo.currentPage = newPage;
      this.fetchData();
    },
    handlerSizeChange(newSize) {
      this.queryInfo.pageSize = newSize;
      this.queryInfo.currentPage = 1;
      localStorage.setItem('fPageSize', JSON.stringify(newSize));
      this.fetchData();
    },
  }
}
</script>
