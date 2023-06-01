import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

import { snackbarVariants } from '~/constants/constants'

const styles = {
  anchorOrigin: { vertical: 'top', horizontal: 'center' },
  alert: { color: 'basic.white' } 
}

const SnackBarContext = createContext({})

export const SnackBarProvider = ({ children }) => {
  const { t } = useTranslation()
  const [show, setShow] = useState(false)
  const [severity, setSeverity] = useState(snackbarVariants.info)
  const [message, setMessage] = useState('')
  const [duration, setDuration] = useState(0)

  const setAlert = useCallback((options) => {
    setShow(true)
    setSeverity(options.severity)
    setMessage(options.message)
    setDuration(options.duration || 4000)
  }, [])

  const handleClose = () => {
    setShow(false)
  }

  const contextValue = useMemo(() => ({ setAlert }), [setAlert])

  return (
    <SnackBarContext.Provider value={ contextValue }>
      { children }
      <Snackbar
        anchorOrigin={ styles.anchorOrigin }
        autoHideDuration={ duration }
        onClose={ handleClose }
        open={ show }
      >
        <Alert severity={ severity } sx={ styles.alert } variant='filled'>
          { t(message) }
        </Alert>
      </Snackbar>
    </SnackBarContext.Provider>
  )
}

export const useSnackBarContext = () => useContext(SnackBarContext)
