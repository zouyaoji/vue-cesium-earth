<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-10-22 00:45:27
 * @LastEditTime: 2022-10-22 00:54:41
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-earth\src\layouts\header\vc-items\Index.vue
-->
<template>
  <template v-for="(item, index) in items" :key="index">
    <div
      class="wrapper"
      :class="{
        'cursor-not-allowed': !!item.disable || !!item.invisible
      }"
    >
      <VcItem
        v-if="!item.invisible"
        :item="item"
        :class="{
          'pointer-events-none': !!item.disable || !!item.invisible
        }"
      >
        {{ itemName(item) }}
      </VcItem>
    </div>
  </template>
</template>
<script lang="ts" setup>
import { PropType } from 'vue'
import { useI18n } from 'vue-i18n'
import { Item } from '../config/contents/types'
import VcItem from '../vc-item/Index.vue'

defineOptions({
  name: 'VcItems'
})

const props = defineProps({
  items: {
    type: Object as PropType<Array<Item>>,
    required: true
  }
})

const { t } = useI18n()
const itemName = (item: Item): string => {
  if (item.name instanceof Function) {
    return item.name(t)
  }
  return item.name as string
}
</script>
