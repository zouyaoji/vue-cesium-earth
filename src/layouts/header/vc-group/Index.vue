<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-10-22 00:30:06
 * @LastEditTime: 2022-10-22 01:43:43
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-earth\src\layouts\header\vc-group\Index.vue
-->
<template>
  <div class="vc-group">
    <div class="group">
      <div class="group-container flex">
        <slot></slot>
      </div>

      <div class="group-name">
        <slot name="name">组</slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'VcGroup'
})
</script>

<style lang="scss" scoped>
.vc-group {
  .group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-right-width: 2px;
    border-color: rgb(55, 65, 81);
    border-right-style: solid;

    .group-name {
      color: white;
      font-size: 0.75rem;
      line-height: 1rem;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: 0.125rem;
      padding-bottom: 0.125rem;
      background-color: rgb(55, 65, 81);
      border-radius: 0.25rem;
      margin-top: 0.25rem;
    }
  }
}
</style>
