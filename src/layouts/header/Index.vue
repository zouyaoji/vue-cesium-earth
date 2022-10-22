<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-20 16:15:37
 * @LastEditTime: 2022-10-22 00:11:52
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-earth\src\layouts\header\Index.vue
-->
<template>
  <div class="main-header relative-position">
    <VcMenus :contents="toolbarConfig"></VcMenus>
  </div>
</template>
<script setup lang="ts">
// import HeaderLog from './log/Index.vue'
// import HeaderFullscreen from './fullscreen/Index.vue'
// import HeaderTheme from './theme/Index.vue'
// import HeaderUser from './user/Index.vue'
// import HeaderLocale from './locale/Index.vue'
// import HeaderLayer from './layer/Index.vue'
import { openURL } from 'quasar'
import { useRoute } from 'vue-router'
import { ref, computed, onMounted, watch } from 'vue'
import { store } from '@src/store'
import { ThemeOptions } from '@src/types/theme'
import { storeToRefs } from 'pinia'
import useTimeout from 'quasar/src/composables/private/use-timeout'
import { useVueCesium } from 'vue-cesium'
import VcMenus from './vc-menus/Index.vue'
import tbConfig from './config'

defineOptions({
  name: 'MainHeader'
})

const $route = useRoute()
const searchActive = ref(false)
const selectedTab = ref('')
const { registerTimeout } = useTimeout()
const delay = ref(100)
const menuStore = store.system.useMenuStore()
const layoutStore = store.system.useLayoutStore()
const { global: globalLayout } = storeToRefs(layoutStore)
const $vc = useVueCesium()

const title = computed(() => {
  return import.meta.env.VITE_VUE_APP_TITLE
})

const toolbarConfig = computed(() => {
  return tbConfig
})

const theme = computed<ThemeOptions>(() => {
  const themeStore = store.system.useThemeStore()
  return themeStore.themeConfig[themeStore.activeName]
})

watch(
  () => $route.matched,
  val => {
    registerTimeout(() => {
      if (val.length > 1) {
        const moduleName = val[1].path.substring(1, val[1].path.length)
        moduleName && (selectedTab.value = moduleName)
      } else {
        selectedTab.value = 'index'
      }
    }, delay.value)
  },
  {
    immediate: true
  }
)

onMounted(() => {
  delay.value = 5
})

const onNavigation = () => {
  openURL('https://github.com/zouyaoji/vue-cesium-demo')
}

const onToggleLeftDrawer = () => {
  layoutStore.toggleGlobalLayout({
    leftDrawerMini: !globalLayout.value.leftDrawerMini
  })
}

const onUpdateSelectedTab = e => {
  if (e === null && $route.matched.length > 1) {
    selectedTab.value = $route.matched[1].path.substring(1, $route.matched[1].path.length)
  } else {
    selectedTab.value = e
  }
}

const test = () => {
  console.log('asd', $vc)
}
</script>

<style lang="scss" scoped>
.main-header {
  .dropdown-panel {
    left: var(--dropdown-panel-p-left);
    top: var(--dropdown-panel-p-top);
  }
}
</style>
