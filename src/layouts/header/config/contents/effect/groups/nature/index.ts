import { ActiveOption, ClickHandlerOption, Group, OnMountedOption, T } from '../../../types'

const view: Group = {
  name: (t: T): string => {
    return t('toolbar.effect.nature', '自然环境')
  },
  items: [
    {
      name: (t: T): string => {
        return t('toolbar.effect.sun', '太阳')
      },
      icon: 'sun',

      clickHandler: (option: ClickHandlerOption): void => {
        // option.store.dispatch(
        //   `jtCesiumVue/toolbar/nature/${NatureActionTypes.SWITCH_SHOW_SUN}`,
        //   option
        // )
      },

      // active: (option: ActiveOption) =>
      //   option.store.state.jtCesiumVue.toolbar.nature.showSun,

      onMounted: (option: OnMountedOption): void => {
        // option.store.state.jtCesiumVue.toolbar.nature.showSun =
        //   !!option?.viewer?.scene.sun?.show
      }
    },
    {
      name: (t: T): string => {
        return t('toolbar.effect.moon', '月亮')
      },
      icon: 'moon',

      clickHandler: (option: ClickHandlerOption): void => {
        // option.store.dispatch(
        //   `jtCesiumVue/toolbar/nature/${NatureActionTypes.SWITCH_SHOW_MOON}`,
        //   option
        // )
      },

      // active: (option: ActiveOption) =>
      //   option.store.state.jtCesiumVue.toolbar.nature.showMoon,

      onMounted: (option: OnMountedOption): void => {
        // option.store.state.jtCesiumVue.toolbar.nature.showMoon =
        //   !!option?.viewer?.scene.moon?.show
      }
    },
    {
      name: (t: T): string => {
        return t('toolbar.effect.atmosphere', '大气层')
      },
      icon: 'atmosphere',

      clickHandler: (option: ClickHandlerOption): void => {
        // option.store.dispatch(
        //   `jtCesiumVue/toolbar/nature/${NatureActionTypes.SWITCH_SHOW_SKY_ATMOSPHERE}`,
        //   option
        // )
      },

      // active: (option: ActiveOption) =>
      //   option.store.state.jtCesiumVue.toolbar.nature.showSkyAtmosphere,

      onMounted: (option: OnMountedOption): void => {
        // option.store.state.jtCesiumVue.toolbar.nature.showSkyAtmosphere =
        //   !!option?.viewer?.scene.skyAtmosphere?.show
      }
    },
    {
      name: (t: T): string => {
        return t('toolbar.effect.light', '日照')
      },
      icon: 'shadow2',

      clickHandler: (option: ClickHandlerOption): void => {
        // option.store.dispatch(
        //   `jtCesiumVue/toolbar/nature/${NatureActionTypes.SWITCH_ENABLE_LIGHT}`,
        //   option
        // )
      },

      // active: (option: ActiveOption) =>
      //   option.store.state.jtCesiumVue.toolbar.nature.enableLighting,

      onMounted: (option: OnMountedOption): void => {
        // if (option) {
        //   const { viewer } = option
        //   option.store.state.jtCesiumVue.toolbar.nature.enableLighting =
        //     !!viewer?.scene.globe?.enableLighting
        // }
      },

      dropdown: {
        componentName: 'earth-light-setting'
      }
    },
    {
      name: (t: T): string => {
        return t('toolbar.effect.skybox', '天空盒')
      },
      icon: 'universe',

      clickHandler: (option: ClickHandlerOption): void => {
        // option.store.dispatch(
        //   `jtCesiumVue/toolbar/nature/${NatureActionTypes.SWITCH_SHOW_SKY_BOX}`,
        //   option
        // )
      },

      // active: (option: ActiveOption) =>
      //   option.store.state.jtCesiumVue.toolbar.nature.showSkyBox,

      onMounted: (option: OnMountedOption): void => {
        // option.store.state.jtCesiumVue.toolbar.nature.showSkyBox =
        //   !!option?.viewer?.scene.skyBox?.show
      }
    },

    {
      name: (t: T): string => {
        return t('toolbar.effect.shadow', '阴影')
      },
      icon: 'shadow3',
      disable: false,

      clickHandler: (option: ClickHandlerOption): void => {
        // option.store.dispatch(
        //   `jtCesiumVue/toolbar/nature/${NatureActionTypes.SWITCH_SHOW_SHADOW}`,
        //   option
        // )
      },

      // active: (option: ActiveOption) =>
      //   option.store.state.jtCesiumVue.toolbar.nature.showShadow,

      onMounted: (option: OnMountedOption): void => {
        // option.store.state.jtCesiumVue.toolbar.nature.showShadow =
        //   !!option?.viewer?.shadows
      }
    }
  ]
}

export default view
