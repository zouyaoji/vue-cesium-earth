/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-10-21 22:19:45
 * @LastEditTime: 2022-10-21 22:20:04
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-earth\src\layouts\header\config\contents\effect\groups\earth-color\index.ts
 */
import { Group, OnMountedOption, T } from '../../../types'

const view: Group = {
  name: (t: T): string => {
    return t('toolbar.effect.earthColor', '地球颜色')
  },
  items: [
    {
      name: (t: T): string => {
        return t('toolbar.effect.uncoverColor', '无覆盖时颜色')
      },
      icon: 'earth',
      disable: false,
      dropdownOnClick: true,
      dropdown: {
        componentName: 'earth-surface-color-picker'
      },
      onMounted: (options: OnMountedOption | undefined): void => {
        if (options) {
          const { viewer, iconEl } = options
          if (viewer && iconEl) {
            const c = viewer.scene.globe.baseColor
            iconEl.style.color = `rgba(${c.red * 255},${c.green * 255},${c.blue * 255},${c.alpha})`
          }
        }
      }
    }
  ]
}

export default view
