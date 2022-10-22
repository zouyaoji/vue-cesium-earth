<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-10-21 21:02:38
 * @LastEditTime: 2022-10-22 17:18:16
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-earth\src\layouts\header\vc-menus\Index.vue
-->
<template>
  <q-tabs
    v-model="tab"
    dense
    class="text-white vc-earth-tabs"
    align="left"
    active-class="vc-earth-tabs-active"
    :switch-indicator="false"
    indicator-color="transparent"
  >
    <template v-for="(content, index) in contents" :key="index">
      <q-tab
        v-if="!content.invisible"
        content-class="vc-earth-tab"
        :disable="!!content.disable || !!content.invisible"
        :name="index"
        :label="contentName(content)"
      >
      </q-tab>
    </template>
    <q-space></q-space>
    <q-btn round dense icon="home"></q-btn>
  </q-tabs>
  <q-tab-panels v-model="tab">
    <template v-for="(content, index) in contents" :key="index">
      <q-tab-panel :name="index" class="vc-earth-tab-panel no-padding">
        <div class="content">
          <template v-for="(group, gIndex) in content.groups" :key="gIndex">
            <div
              class="wrapper"
              :class="{
                'cursor-not-allowed': !!group.disable || !!group.invisible
              }"
            >
              <VcGroup
                v-if="!group.invisible"
                :key="gIndex"
                :class="{
                  'pointer-events-none': !!group.disable || !!group.invisible
                }"
              >
                <template #name>{{ groupName(group) || '组' }}</template>

                <VcItems :items="group.items" />
              </VcGroup>
            </div>
          </template>
        </div>
      </q-tab-panel>
    </template>
  </q-tab-panels>
</template>
<script lang="ts" setup>
import { onMounted, PropType, ref, watch } from 'vue'
import { Content, Group } from '@src/layouts/header/config/contents/types'
import { useI18n } from 'vue-i18n'
import VcGroup from '../vc-group/Index.vue'
import VcItems from '../vc-items/Index.vue'

defineOptions({
  name: 'VcMenus'
})

const props = defineProps({
  contents: {
    type: Object as PropType<Array<Content>>,
    required: true
  }
})

const emits = defineEmits({
  selectChange: (index: number) => true
})

const tab = ref(0)

const { t } = useI18n()
const currentIndex = ref(0)

watch(currentIndex, () => {
  emits('selectChange', currentIndex.value)
})

const setCurrent = (index: number, content: Content) => {
  if (!!content.invisible || !!content.disable) {
    return
  }
  currentIndex.value = index
}

const contentName = (content: Content): string => {
  if (content.name instanceof Function) {
    return content.name(t)
  }
  return content.name as string
}

const groupName = (group: Group): string => {
  if (group.name instanceof Function) {
    return group.name(t)
  }
  return group.name as string
}
</script>

<style lang="scss" scoped>
.vc-earth-tabs {
  background: rgb(55, 65, 81);
  height: 40px;
  .vc-earth-tabs-active {
    background: rgb(107 114 128);
  }

  .q-tab {
    &:hover {
      background: rgb(107 114 128);
    }
  }
}

.vc-earth-tab-panel {
  background: rgb(107 114 128);
  height: 100px;
  .content {
    display: flex;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
}
</style>
