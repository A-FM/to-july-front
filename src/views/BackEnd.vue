<template>
  <el-container>
    <el-header>
      <b-header/>
    </el-header>
    <el-main>
      <router-view class="font-end-content"/>
    </el-main>
    <el-footer>
      <CommonFooter/>
    </el-footer>
  </el-container>
</template>
<script>
import BHeader from "@/components/BackEnd/BHeader.vue";
import CommonFooter from "@/components/CommonFooter.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {
    BHeader,
    CommonFooter,
  },
});
</script>

<style>

</style>
