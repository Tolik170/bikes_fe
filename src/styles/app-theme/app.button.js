import palette from './app.pallete.js'

const button = {
  styleOverrides: {
    root: {
      lineHeight: '20px',
      fontSize: '14px',
      opacity: '1'
    },
    sizeSmall: {
      fontSize: '12px',
      padding: '5px 16px'
    },
    sizeMedium: {
      padding: '10px 24px'
    },
    sizeLarge: {
      padding: '12px 24px',
      fontSize: '16px'
    },
    sizeExtraLarge: {
      padding: '16px 32px',
      fontSize: '16px'
    },
    contained: {
      backgroundColor: palette.primary[900],
      color: palette.primary[50]
    },
    containedLight: {
      backgroundColor: palette.primary[500],
      color: palette.basic.white,
      '&:hover': {
        backgroundColor: palette.primary[400]
      }
    },
    outlined: {
      color: palette.primary[900]
    },
    text: {
      color: palette.primary[900]
    },
    tonal: {
      backgroundColor: palette.companyBlue
    }
  }
}

export default button
