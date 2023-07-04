<template>
  <div class="flex flex-col items-center">
    <app-header/>
    <!-- 路由展示区域 -->
    <div class="w-[1200px] min-h-[1000px] p-2.5 mt-20 mb-2.5 shadow">
      <router-view/>
    </div>
    <app-footer/>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="sass" scoped>

</style>