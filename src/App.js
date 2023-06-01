import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { ModalProvider } from '~/context/modal-context'
import { SnackBarProvider } from '~/context/snackbar-context'
import { CartContextProvider }  from '~/context/cart-context'
import { ConfirmationDialogProvider } from '~/context/confirm-context'
import AppContent from '~/containers/app-content/AppContent'

import { theme } from '~/styles/app-theme/custom-mui.styles'

const App = () => {
  return (
    <ThemeProvider theme={ theme }>
      <ConfirmationDialogProvider>
        <SnackBarProvider>
          <CartContextProvider>
            <ModalProvider>
              <CssBaseline />
              <AppContent />
            </ModalProvider>
          </CartContextProvider>
        </SnackBarProvider>
      </ConfirmationDialogProvider>
    </ThemeProvider>
  )
}

export default App
