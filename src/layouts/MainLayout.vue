<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-14 16:36:31
 * @LastEditTime: 2022-10-22 09:02:45
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-earth\src\layouts\MainLayout.vue
-->
<template>
  <q-layout view="hHh Lpr fFf" class="main-layout" :class="{ 'gray-mode': grayActive }">
    <!-- header -->
    <q-header v-if="layoutStore.header.visible" elevated class="main-header-container">
      <main-header />
    </q-header>
    <q-page-container>
      <q-page class="interaction-root" :style-fn="myTweak">
        <main-viewer @viewer-ready="onViewerReady">
          <div v-if="layoutStore.global.content" class="content">
            <main-interaction />
            <router-view />
          </div>
        </main-viewer>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { get } from 'lodash'
import MainHeader from '@src/layouts/header/Index.vue'
import MainInteraction from '@src/components/interaction/Index.vue'
import MainViewer from '@src/components/viewer/Index.vue'
import { pinia } from '@src/store'
import { store } from '@src/store'
import { storeToRefs } from 'pinia'
import { useRouter, useRoute } from 'vue-router'
import { ThemeOptions } from '@src/types/theme'

defineOptions({
  name: 'VcDemoMainLayout'
})

const $route = useRoute()
// state
const layoutStore = store.system.useLayoutStore()
const { active: grayActive } = storeToRefs(store.system.useGrayStore())
const menuStore = store.system.useMenuStore()

// computed
const headerMenus = computed(() => {
  const header = menuStore.header
  return header.length ? header[0].children : []
})

const myTweak = offset => {
  // "offset" is a Number (pixels) that refers to the total
  // height of header + footer that occupies on screen,
  // based on the QLayout "view" prop configuration

  // this is actually what the default style-fn does in Quasar
  return { height: `calc(100vh - ${140}px)` }
}

const asideMenus = computed(() => {
  return menuStore.aside
})

const currentRouteName = computed(() => {
  return $route.name
})

const theme = computed<ThemeOptions>(() => {
  const themeStore = store.system.useThemeStore()
  return themeStore.themeConfig[themeStore.activeName]
})

// watch
watch(
  () => $route.matched,
  val => {
    if (val.length > 1) {
      const side = headerMenus.value.filter(menu => menu.path === val[1].path)
      if (side.length) {
        const children = side[0]?.children?.filter(v => v.type === 10)
        if (children?.length) {
          menuStore.asideSet(children)
        } else {
          menuStore.asideSet([])
        }
      } else {
        menuStore.asideSet([])
      }
    }
  },
  {
    immediate: true
  }
)

// lifecyle
onMounted(() => {
  // 用户登录后从本地数据库加载一系列的设置
  store.system.useAccountStore().load()
  // 初始化全屏监听
  store.system.useFullscreenStore().listen()
  window.onunhandledrejection = error => {
    store.system.useLogStore(pinia).push({
      message: get(error, 'reason.message', 'Unknown error'),
      type: 'danger',
      meta: {
        error: get(error, 'reason'),
        trace: get(error, 'reason.stack')
      }
    })
  }
  window.onerror = (event, source, lineno, colno, error) => {
    store.system.useLogStore(pinia).push({
      message: get(error, 'message', 'Unknown error'),
      type: 'danger',
      meta: {
        error,
        trace: get(error, 'stack'),
        source: `${source}@${lineno}:${colno}`,
        event: event
      }
    })
  }
})

const onViewerReady = () => {
  layoutStore.header.visible = true
}
</script>
<style lang="scss" scoped>
.main-layout {
  width: 100%;
  overflow: hidden;

  // ::v-deep(.q-page-container) {
  //   padding-top: 70px;
  // }
  // ::v-deep(.q-drawer) {
  //   // height: 350px;
  //   height: fit-content;
  //   top: 120px;
  //   left: 12px;
  // }
  // ::v-deep(.q-drawer--left) {
  //   background: var(--themeQMenuBackgroundColor);
  // }
  &.gray-mode {
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: grayscale(100%);
    filter: gray;
  }

  & > .main-header-container {
    // height: 75px;
    width: 100%;
    z-index: 2;
    // background-color: black;
    background-color: v-bind('theme.header.themeHeaderContentBackgroundColor');
  }

  .drawer-menu-list {
    height: fit-content;
    overflow: hidden;
    color: v-bind('theme.menu.themeMenuColor') !important;
    .menu-active-item {
      color: v-bind('theme.menu.themeMenuActiveColor');
      font-size: 16px;
      // background-color: v-bind('theme.menu.themeMenuActiveBackgroundColor');
    }
  }

  .interaction-root {
    height: 100vh;
    position: relative;
    flex-basis: 100%;
  }
}
</style>
