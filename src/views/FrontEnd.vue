<template>
  <el-container>
    <el-header>
      <f-header/>
    </el-header>
    <el-main>
      <router-view class="font-end-content" name="fHomePage"/>
    </el-main>
    <el-footer>
      <CommonFooter/>
    </el-footer>
  </el-container>
</template>
<script>
import FHeader from "@/components/FontEnd/FHeader.vue";
import CommonFooter from "@/components/CommonFooter.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {
    FHeader,
    CommonFooter,
  },
});
</script>

<style>

</style>
