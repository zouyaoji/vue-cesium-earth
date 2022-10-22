/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-10-21 21:19:13
 * @LastEditTime: 2022-10-22 15:52:18
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-earth\src\layouts\header\config\contents\view\groups\fly-to\index.ts
 */
import { flyToCamera } from 'vue-cesium/es/utils/cesium-helpers'
import { ClickHandlerOption, Group, T } from '../../../types'

const view: Group = {
  name: (t: T): string => {
    return t('toolbar.view.flyTo', '快速定位')
  },
  items: [
    {
      name: (t: T): string => {
        return t('toolbar.view.earth', '全球')
      },
      icon: 'vc-icons vc-icons-insert',
      clickHandler: (options: ClickHandlerOption | undefined): void => {
        const viewer = options?.viewer
        if (!viewer) {
          return
        }
        flyToCamera(
          viewer,
          {
            position: [105, 30, 19059568.5],
            heading: 360,
            pitch: -90,
            roll: 0
          },
          {
            duration: 1
          }
        )
      }
    },
    {
      name: (t: T): string => {
        return t('toolbar.view.china', '中国')
      },
      icon: 'vc-icons vc-icons-insert',
      clickHandler: (options: ClickHandlerOption | undefined): void => {
        const viewer = options?.viewer
        if (!viewer) {
          return
        }
        flyToCamera(
          viewer,
          {
            position: [107.5493044, 37.9611768, 8511735.8],
            heading: 360,
            pitch: -90,
            roll: 0
          },
          {
            duration: 1
          }
        )
      }
    }
  ],
  invisible: false,
  disable: false
}

export default view
