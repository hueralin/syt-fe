<template>
  <div class="hospital-filter">
    <div class="mb-5">医院</div>
    <div class="flex mb-5">
      <div class="basis-12 shrink-0">等级：</div>
      <ul>
        <li>全部</li>
        <li>三级甲等</li>
        <li>三级乙等</li>
        <li>二级甲等</li>
        <li>二级乙等</li>
        <li>一级</li>
      </ul>
    </div>
    <div class="flex mb-5">
      <div class="basis-12 shrink-0">地域：</div>
      <ul>
        <li>全部</li>
        <li>东城区</li>
        <li>西城区</li>
        <li>朝阳区</li>
        <li>丰台区</li>
        <li>石景山区</li>
        <li>海淀区</li>
        <li>门头沟区</li>
        <li>房山区</li>
        <li>大兴区</li>
        <li>通州区</li>
        <li>顺义区</li>
        <li>昌平区</li>
        <li>怀柔区</li>
        <li>平谷区</li>
        <li>密云区</li>
        <li>延庆区</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.hospital-filter {
  color: #7f7f7f;

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      margin-right: 10px;
      cursor: pointer;

      &:hover {
        color: #55a6fe;
      }
    }
  }
}
</style>