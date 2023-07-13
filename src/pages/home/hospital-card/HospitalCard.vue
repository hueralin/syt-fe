<template>
  <el-card class="hospital-card" shadow="hover">
    <div class="grow mr-2.5">
      <div class="mb-2.5">
        {{ hosInfo.hosname }}
      </div>
      <div class="flex justify-between w-full">
        <div class="flex items-center">
          <el-icon class="mr-1" color="#7f7f7f">
            <star />
          </el-icon>
          <span class="text-sm text-[#7f7f7f]">{{ hosInfo.param.hostypeString }}</span>
        </div>
        <div class="flex items-center">
          <el-icon class="mr-1" color="#7f7f7f">
            <timer />
          </el-icon>
          <span class="text-sm text-[#7f7f7f]">每天 {{ hosInfo.bookingRule.releaseTime }} 放号</span>
        </div>
      </div>
    </div>
    <img :src="`data:image/jpeg;base64,${hosInfo.logoData}`" alt="">
  </el-card>
</template>

<script lang="ts" setup>
import { Star, Timer } from '@element-plus/icons-vue'

defineProps({
  hosInfo: { type: Object, required: true }
})
</script>

<style lang="scss" scoped>
.hospital-card {

  :deep(.el-card__body) {
    display: flex;
    align-items: center;

    img {
      flex-shrink: 0;
      width: 50px;
      height: 50px;
    }
  }
}
</style>