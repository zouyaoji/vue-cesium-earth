/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-08 23:26:13
 * @LastEditTime: 2023-08-14 17:47:11
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium-earth\src\main.ts
 */
import { createApp } from 'vue'
import { Quasar, Notify, Dialog, LocalStorage, Loading, AppFullscreen } from 'quasar'
import quasarLang from 'quasar/lang/zh-CN'
import VueCesium from 'vue-cesium'
// Import store and router instances
import { pinia } from '@store/index'
import router from '@router/index'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
// Import VueCesium css
import 'vue-cesium/dist/index.css'
// Import Quasar css
import 'quasar/src/css/index.sass'

import '@src/assets/style/index.scss'

import { i18n } from '@src/i18n'
import App from './App.vue'

const app = createApp(App)
app.use(Quasar, {
  plugins: {
    Notify,
    Dialog,
    LocalStorage,
    Loading,
    AppFullscreen
  }, // import Quasar plugins and add here
  lang: quasarLang
})
app.use(i18n)
app.use(VueCesium)
app.use(pinia)
app.use(router)
app.mount('#app')
