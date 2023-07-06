<template>
  <div>
    <!-- 轮播图 -->
    <carousel/>
    <!-- 搜索 -->
    <search/>
    <!-- 展示医院的结构 -->
    <el-row :gutter="20">
      <el-col :span="17">
        <!-- 医院筛选 -->
        <hospital-filter/>
        <!-- 医院列表 -->
        <div class="flex flex-wrap justify-between">
          <hospital-card
              v-for="item in 10"
              :key="item"
              class="w-[49%] mb-2.5 cursor-pointer"
          />
          <!-- 分页器 -->
          <el-pagination
              v-model:current-page="pageNum"
              v-model:page-size="pageSize"
              :background="true"
              :page-sizes="[10, 20, 30, 40]"
              :total="56"
              class="mt-2.5"
              layout="prev, pager, next, jumper, sizes, total"
          />
        </div>
      </el-col>
      <el-col :span="7">公告</el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Carousel from '@/pages/home/carousel/Carousel.vue'
import Search from '@/pages/home/search/Search.vue'
import HospitalFilter from '@/pages/home/hospital-filter/HospitalFilter.vue'
import HospitalCard from '@/pages/home/hospital-card/HospitalCard.vue'

const pageNum = ref(1)
const pageSize = ref(10)
</script>

<style scoped>

</style>