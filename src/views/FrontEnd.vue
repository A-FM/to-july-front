<template>
  <el-container>
    <el-header>
      <f-header/>
    </el-header>
    <el-main>
      <router-view class="font-end-content" name="fHomePage"/>
    </el-main>
    <el-footer>
      <f-footer/>
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
