<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-21 11:18:40
 * @LastEditTime: 2022-08-31 16:24:23
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-demo\src\pages\index\Index.vue
-->
<template>
  <div class="z-top absolute-center page-index">
    <vc-entity
      ref="entity"
      :position="entity.position"
      :point="entity.point"
      :label="entity.label"
      @click="onEntityClick"
    >
      <vc-graphics-billboard
        ref="billboard"
        image="https://zouyaoji.top/vue-cesium/favicon.png"
        :scale="0.5"
      ></vc-graphics-billboard>
      <vc-graphics-rectangle :coordinates="[130, 20, 80, 25]" material="green"></vc-graphics-rectangle>
    </vc-entity>
  </div>
</template>
<script lang="ts" setup>
import { store } from '@src/store'
import { onMounted, onUnmounted, ref } from 'vue'
import { useVueCesium, VcEntityProps } from 'vue-cesium'
import { flyToCamera } from 'vue-cesium/es/utils/cesium-helpers'

defineOptions({
  name: 'VcDemoPageIndex'
})

const $vc = useVueCesium()

const entity = ref<VcEntityProps>({
  position: [108, 32],
  point: {
    pixelSize: 28,
    color: 'red'
  },
  label: {
    text: 'Hello World',
    pixelOffset: [0, 150]
  }
})

const { loadDefaultLayers, toggle } = store.viewer.useLayerStore()

onMounted(() => {
  loadDefaultLayers(true)

  flyToCamera($vc.viewer, {
    position: [105, 30, 19159568]
  })
})

onUnmounted(() => {
  toggle({
    names: 'admin',
    show: false
  })
})

const onEntityClick = e => {
  console.log(e)
}
</script>
