<template>
  <el-card class="hospital-card" shadow="hover">
    <div class="grow mr-2.5">
      <div class="mb-2.5">航天中心医院</div>
      <div class="flex justify-between w-full">
        <div class="flex items-center">
          <el-icon class="mr-1" color="#7f7f7f">
            <star></star>
          </el-icon>
          <span class="text-sm text-[#7f7f7f]">三级乙等</span>
        </div>
        <div class="flex items-center">
          <el-icon class="mr-1" color="#7f7f7f">
            <timer/>
          </el-icon>
          <span class="text-sm text-[#7f7f7f]">每天 8：00 放号</span>
        </div>
      </div>
    </div>
    <img alt="" src="@/assets/images/logo.png">
  </el-card>
</template>

<script lang="ts" setup>
import { Star, Timer } from '@element-plus/icons-vue'
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