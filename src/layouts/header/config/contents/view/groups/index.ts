/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-10-21 21:17:20
 * @LastEditTime: 2022-10-21 21:26:36
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-earth\src\layouts\header\config\contents\view\groups\index.ts
 */

import state from './status'
import flyTo from './fly-to'
// import view from './view'
import { Group } from '../../types'

const groups: Array<Group> = [flyTo, state]
export default groups
