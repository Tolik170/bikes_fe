import { createTheme } from '@mui/material/styles'

import palette from './app.pallete.js'
import button from './app.button'
import { svgIcon } from './app.svgicon'

export const theme = createTheme({
  palette,
  //typography: appTypography,
  components: {
    MuiSvgIcon: svgIcon,
    MuiButton: button
  }
})
