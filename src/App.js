import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { ModalProvider } from '~/context/modal-context'
import { ConfirmationDialogProvider } from '~/context/confirm-context'
import AppContent from '~/containers/app-content/AppContent'
import { theme } from '~/styles/app-theme/custom-mui.styles'

const App = () => {
  return (
    <ThemeProvider theme={ theme }>
      <ConfirmationDialogProvider>
        <ModalProvider>
          <CssBaseline />
          <AppContent />
        </ModalProvider>
      </ConfirmationDialogProvider>
    </ThemeProvider>
  )
}

export default App
