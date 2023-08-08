<template>
  <div class="common-layout">
    <el-container>
      <f-header/>
      <router-view/>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>


<script>
import FHeader from "@/components/FontEnd/FHeader.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components:{
    FHeader,
  },
});
</script>
