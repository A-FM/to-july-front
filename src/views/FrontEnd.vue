<template>
  <el-container>
    <el-header>
      <f-header class="header-border"/>
    </el-header>
    <el-main>
      <router-view class="font-end-content" name="fHomePage"/>
      <router-view class="font-end-content" name="fBlogContent"/>
    </el-main>
    <el-footer>
      <f-footer class="footer-border"/>
    </el-footer>
  </el-container>
</template>


<script>
import FHeader from "@/components/FontEnd/FHeader.vue";
import FFooter from "@/components/FontEnd/FFooter.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {
    FHeader,
    FFooter,
  },
});
</script>

<style>

</style>
