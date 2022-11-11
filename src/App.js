import React from 'react'
// import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import AppContent from './containers/app-content/AppContent'
// import { SnackBarContextProvider } from '../../context/snackbar-context'

const App = () => {
  return (
    // <ThemeProvider theme={themeValue}>
    // <SnackBarContextProvider>
    <>
      <CssBaseline />
      <AppContent />
    </>
    // </SnackBarContextProvider>
    // </ThemeProvider>
  )
}

export default App
