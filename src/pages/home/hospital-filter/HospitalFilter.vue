<template>
  <div class="hospital-filter">
    <div class="mb-5">
      医院
    </div>
    <div class="flex mb-5">
      <div class="basis-12 shrink-0">
        等级：
      </div>
      <ul>
        <li :class="{ 'text-[#55a6fe]': localLevel === '' }" @click="changeLevel('')">
          全部
        </li>
        <li
          v-for="l in levels"
          :key="l.id"
          :class="{ 'text-[#55a6fe]': localLevel === l.value }"
          @click="changeLevel(l.value)"
        >
          {{ l.name }}
        </li>
      </ul>
    </div>
    <div class="flex mb-5">
      <div class="basis-12 shrink-0">
        地域：
      </div>
      <ul>
        <li :class="{ 'text-[#55a6fe]': localRegion === '' }" @click="changeRegion('')">
          全部
        </li>
        <li
          v-for="r in regions"
          :key="r.id"
          :class="{ 'text-[#55a6fe]': localRegion === r.value }"
          @click="changeRegion(r.value)"
        >
          {{ r.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue'
import { DictCode, HospitalLevelOrRegionItem } from '@/api/home/type.ts'
import { aptGetHospitalLevelOrRegion } from '@/api/home'
import { useVModel } from '@vueuse/core'

const props = defineProps({
  level: { type: String, default: '' },
  region: { type: String, default: '' }
})

const emits = defineEmits(['update:level', 'update:region'])

const levels = ref<HospitalLevelOrRegionItem[]>([])
const regions = ref<HospitalLevelOrRegionItem[]>([])
const localLevel = useVModel(props, 'level', emits)
const localRegion = useVModel(props, 'region', emits)

const getLevels = async () => {
  const { ok, data } = await aptGetHospitalLevelOrRegion(DictCode.HosType)
  if (ok) {
    levels.value = data || []
  }
}

const getRegions = async () => {
  const { ok, data } = await aptGetHospitalLevelOrRegion(DictCode.HosBeijing)
  if (ok) {
    regions.value = data || []
  }
}

const changeLevel = (level: string) => {
  localLevel.value = level
  emits('update:level', level)
}

const changeRegion = (region: string) => {
  localRegion.value = region
  emits('update:region', region)
}

onBeforeMount(() => {
  getLevels()
  getRegions()
})
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