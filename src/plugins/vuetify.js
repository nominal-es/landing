/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  ssr: true,

  defaults: {
    global: {
      ripple: false,
      hideDetails: 'auto',
    },
    VAppBar: {
      flat: true,
    },
    VExpansionPanel: {
      rounded: 1,
    },
    VAutocomplete: {
      variant: 'solo'
    },
    VAvatar: {
      rounded: 1,
      color: 'primary',
      variant: 'tonal',
    },
    VAlert: {
      variant: 'tonal',
      rounded: 1,
    },
    VBtnGroup: {
      variant: 'tonal',
      color: 'primary',
      rounded: 1,
    },
    VSnackbar: {
      location: 'bottom right'
    },
    VSlider: {
      rounded: 1,
      color: 'primary'
    },
    VSwitch: {
      inset: true,
      color: 'primary',
    },
    VChip: {
      variant: 'elevated'
    },
    VCheckbox: {
      color: 'primary',
    },
    VRadioGroup: {
      color: 'primary'
    },
    VProgressCircular: {
      color: 'primary',
    },
    VProgressLinear: {
      rounded: 1,
      color: 'primary'
    },
    VDialog: {
      maxWidth: 400
    },
    VPagination: {
      size: 'large',
      density: 'compact'
    },
    VTextField: {
      color: 'primary',
      variant: 'solo',
    },
    VMenu: {
      offset: 5
    },
    VTextarea: {
      variant: 'solo'
    },
    VCard: {
      rounded: 1,
      border: true,
    },
    VTooltip: {
      theme: 'light'
    },
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#009688',
        },
      },
      dark: {
        colors: {
          primary: '#009688',
        },
        dark:true
      },
    },
  },
})
