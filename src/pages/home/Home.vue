<template>
  <div>
    <!-- 轮播图 -->
    <carousel/>
    <!-- 搜索 -->
    <search/>
    <!-- 展示医院的结构 -->
    <el-row :gutter="20">
      <el-col :span="20">
        <!-- 医院筛选 -->
        <hospital-filter/>
      </el-col>
      <el-col :span="4">right</el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import Carousel from '@/pages/home/carousel/Carousel.vue'
import Search from '@/pages/home/search/Search.vue'
import HospitalFilter from '@/pages/home/hospital-filter/HospitalFilter.vue'
</script>

<style scoped>

</style>