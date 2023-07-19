<template>
  <div>
    <!-- 轮播图 -->
    <carousel />
    <!-- 搜索 -->
    <search />
    <!-- 展示医院的结构 -->
    <el-row :gutter="20">
      <el-col :span="17">
        <!-- 医院筛选 -->
        <hospital-filter v-model:level="levelSelected" v-model:region="regionSelected" />
        <!-- 医院列表 -->
        <div v-loading="loading">
          <div v-if="hospitalList.length > 0" class="flex flex-wrap justify-between">
            <hospital-card
              v-for="hospital in hospitalList"
              :key="hospital.id"
              :hos-info="hospital"
              class="w-[49%] mb-2.5 cursor-pointer"
            />
            <!-- 分页器 -->
            <el-pagination
              v-model:current-page="pageNum"
              v-model:page-size="pageSize"
              :background="true"
              :page-sizes="[2, 10, 15, 20]"
              :total="total"
              class="mt-2.5"
              layout="prev, pager, next, jumper, sizes, total"
              @current-change="currentChange"
              @size-change="sizeChange"
            />
          </div>
          <el-empty v-else :image-size="200" />
        </div>
      </el-col>
      <el-col :span="7">
        公告
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import Carousel from '@/pages/home/carousel/Carousel.vue'
import Search from '@/pages/home/search/Search.vue'
import HospitalFilter from '@/pages/home/hospital-filter/HospitalFilter.vue'
import HospitalCard from '@/pages/home/hospital-card/HospitalCard.vue'
import { apiGetHospital } from '@/api/home'
import { ApiGetHospitalReq, HospitalItem } from '@/api/home/type.ts'

const loading = ref(false)
const pageNum = ref(1)
const pageSize = ref(10)
const total = ref(0)
const hospitalList = ref<HospitalItem[]>([])
const levelSelected = ref<string>('')
const regionSelected = ref<string>('')

const getHospitalList = async () => {
  loading.value = true
  const params: ApiGetHospitalReq = {
    pageNum: pageNum.value,
    pageSize: pageSize.value,
    hostype: levelSelected.value,
    districtCode: regionSelected.value
  }
  const res = await apiGetHospital(params)
  if (res.ok && res.data) {
    hospitalList.value = res.data.content
    total.value = res.data.totalElements
  }
  loading.value = false
}

function currentChange() {
  getHospitalList()
}

function sizeChange() {
  pageNum.value = 1
  getHospitalList()
}

watch([levelSelected, regionSelected], () => {
  pageNum.value = 1
  getHospitalList()
})

onMounted(() => {
  getHospitalList()
})
</script>

<style scoped>

</style>