/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import { mdi } from 'vuetify/iconsets/mdi'
import { aliases, fa } from 'vuetify/iconsets/fa'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons:{
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
      fa,
    }
  },
  defaults: {
    global: {
      elevation: 0,
      ripple: false,
      hideDetails: true,
    },
    VExpansionPanel: {
      rounded: 10,
    },
    VBtn: {
      color: 'primary',
      rounded: 10,
    },
    VAvatar: {
      rounded: 1,
      color: 'primary',
      variant: 'tonal',
    },
    VAlert: {
      variant: 'tonal',
      rounded: 10,
    },
    VBtnGroup: {
      variant: 'tonal',
      color: 'primary',
      rounded: 10,
    },
    VSlider: {
      rounded: 10,
      color: 'primary'
    },
    VSwitch: {
      color: 'primary',
    },
    VCheckbox: {
      color: 'primary',
    },
    VRadioGroup: {
      color: 'primary'
    },
    VProgressLinear: {
      rounded: 10,
      color: 'primary'
    },
    VTextField: {
      singleLine: true,
      color: 'primary',
    },
    VCard: {
      rounded: 10,
      border: true,
    },
    VTooltip:{
      theme:'light'
    },
    VAppBar: {
      border: "b",
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#F44336',
        },
      },
    },
  },
})
