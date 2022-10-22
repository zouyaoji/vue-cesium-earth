/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-10-21 21:21:35
 * @LastEditTime: 2022-10-22 17:25:54
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-earth\src\layouts\header\config\contents\view\groups\status\index.ts
 */

import { ActiveOption, ClickHandlerOption, Group, T } from '../../../types'

const view: Group = {
  name: (t: T): string => {
    return t('toolbar.view.control', '控件')
  },
  items: [
    {
      name: (t: T): string => {
        return t('toolbar.view.layerManager', '图层管理')
      },
      icon: 'camera2',
      clickHandler: (option: ClickHandlerOption): void => {
        option.layoutStore.control.layerManger.show = !option.layoutStore.control.layerManger.show
      },
      active: (option: ActiveOption): boolean => {
        return option.layoutStore.control.layerManger.show || false
      }
      // dropdown: {
      //   componentName: 'camera-percentage-change-rate'
      // }
    },
    {
      name: (t: T): string => {
        return t('toolbar.view.onlineLayers', '在线图层')
      },
      icon: 'camera2',
      clickHandler: (option: ClickHandlerOption): void => {
        option.layoutStore.control.onlineLayers.show = !option.layoutStore.control.onlineLayers.show
      },
      active: (option: ActiveOption): boolean => {
        return option.layoutStore.control.onlineLayers.show || false
      }
      // dropdown: {
      //   componentName: 'camera-percentage-change-rate'
      // }
    },
    {
      name: (t: T): string => {
        return t('toolbar.view.compass', '导航控件')
      },
      icon: 'click',
      clickHandler: (option: ClickHandlerOption): void => {
        option.layoutStore.control.compass.show = !option.layoutStore.control.compass.show
        console.log(option.layoutStore.control.compass.show)
      },
      active: (option: ActiveOption): boolean => {
        return option.layoutStore.control.compass.show || false
      }
    },
    // {
    //   name: (t: T): string => {
    //     return t('toolbar.view.distanceLengend', '比例尺')
    //   },
    //   icon: 'click',
    //   clickHandler: (option: ClickHandlerOption): void => {
    //     option.layoutStore.control.distanceLegend.show = !option.layoutStore.control.distanceLegend.show
    //   },
    //   active: (option: ActiveOption): boolean => {
    //     return option.layoutStore.control.distanceLegend.show || false
    //   }
    // },
    {
      name: (t: T): string => {
        return t('toolbar.view.statusBar', '状态栏')
      },
      icon: 'click',
      clickHandler: (option: ClickHandlerOption): void => {
        option.layoutStore.control.statusBar.show = !option.layoutStore.control.statusBar.show
      },
      active: (option: ActiveOption): boolean => {
        return option.layoutStore.control.statusBar.show || false
      }
    }
  ]
}

export default view
