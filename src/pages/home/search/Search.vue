<template>
  <div class="search flex justify-center items-center py-5">
    <el-autocomplete
        class="mr-1"
        clearable
        placeholder="请输入医院名称"
    />
    <el-button :icon="Search" type="primary"></el-button>
  </div>
</template>

<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.search {

  // 深度选择器，vue 提供的，用于修改组件库的样式
  :deep(.el-input__wrapper) {
    width: 400px;
    height: 40px;
  }

  :deep(.el-button) {
    height: 40px;
  }
}
</style>