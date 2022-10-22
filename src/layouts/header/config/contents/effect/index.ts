/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-10-21 22:12:46
 * @LastEditTime: 2022-10-21 22:25:27
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-earth\src\layouts\header\config\contents\effect\index.ts
 */
import { Content, T } from '../types'
import groups from './groups'

const content: Content = {
  name: (t: T): string => {
    return t('toolbar.effect.content', '效果')
  },
  groups
}

export default content
