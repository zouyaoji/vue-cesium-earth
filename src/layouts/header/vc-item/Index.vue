<template>
  <div ref="el" class="vc-item">
    <div class="container">
      <q-btn dense flat stack class="btn" :class="{ active: active }" @click="itemClicked">
        <q-icon class="icon" :class="item.icon"></q-icon>
        <slot></slot>
      </q-btn>

      <q-btn
        v-if="dropdownVisible"
        size="12px"
        :class="{ active: dropdownActive }"
        class="dropdown"
        flat
        round
        icon="expand_more"
        @click.stop="dropdownClicked"
      >
      </q-btn>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { store } from '@src/store'
import { computed, onMounted, PropType, shallowRef } from 'vue'
import { useVueCesium } from 'vue-cesium'
import { useRouter } from 'vue-router'
import { ActiveOption, ClickHandlerOption, Item, OnMountedOption } from '../config/contents/types'

const props = defineProps({
  item: {
    type: Object as PropType<Item>,
    required: true
  }
})

const router = useRouter()
const el = shallowRef<HTMLElement>(null)
const icon = shallowRef<HTMLElement>(null)
const $vc = useVueCesium()
const layoutStore = store.system.useLayoutStore()

const active = computed((): boolean => {
  const { item } = props
  const option: ActiveOption = {
    layoutStore
  }
  return !!item.active && item.active(option)
})

const dropdown = computed(() => {
  // return store.state.jtCesiumVue.toolbar.dropdown
  return false
})

const dropdownActive = computed((): boolean => {
  const { item } = props
  if (item.dropdown) {
    // return dropdown.value.componentName === item.dropdown.componentName
  }
  return false
})

const dropdownVisible = computed((): boolean => {
  const { item } = props
  return item.dropdownOnClick ? false : !!item.dropdown
})

onMounted(() => {
  const { item } = props
  const { viewer } = $vc
  const option: OnMountedOption = {
    viewer: viewer,
    iconEl: icon.value as HTMLElement,
    layoutStore
  }
  item.onMounted && item.onMounted(option)
})

const dropdownClicked = () => {
  const { item } = props
  if (!item || !item.dropdown) {
    return
  }
  const left = (el.value! as HTMLElement).offsetLeft
  console.log('dropdownClicked', left)
  // const val: DropdownState = {
  //   ...dropdown.value,
  //   show: true,
  //   left,
  //   componentName: item.dropdown.componentName,
  //   iconEl: icon.value! as HTMLElement
  // }
  // store.dispatch(`jtCesiumVue/toolbar/${ToolbarActionTypes.SET_DROP_DOWN}`, val)
}

const itemClicked = (e: MouseEvent) => {
  const { item } = props
  const { viewer } = $vc
  if (!viewer) {
    return
  }
  if (item.dropdownOnClick) {
    dropdownClicked()
    e.stopPropagation()
    return
  }
  const option: ClickHandlerOption = {
    viewer: viewer,
    item: item,
    layoutStore,
    router
  }
  const result = item.clickHandler && item.clickHandler(option)
  item.clickHandlerResult = result
}
</script>

<style lang="scss" scoped>
.vc-item {
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    margin-left: 0.1rem;
    margin-right: 0.1rem;

    .btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      min-width: 64px;
      :hover {
        color: rgb(96, 165, 250);
      }

      &.active {
        color: rgb(96, 165, 250);
        background-color: rgba(96, 165, 250, 0.15);
      }

      .icon {
        font-size: 2.25rem;
        line-height: 2.5rem;
      }
      .text {
        color: white;
        font-size: 0.875rem;
        line-height: 1.25rem;
        user-select: none;
      }
    }

    .dropdown {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      margin-left: 0.5rem;

      :hover {
        color: rgb(96, 165, 250);
      }

      &.active {
        color: rgb(96, 165, 250);
        background-color: rgba(96, 165, 250, 0.15);
      }
    }
  }
}
</style>
