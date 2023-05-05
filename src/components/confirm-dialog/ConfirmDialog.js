import { useTranslation } from 'react-i18next'

import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'

import { styles } from './ConfirmDialog.styles'
import AppButton from '../app-button/AppButton'

const ConfirmDialog = ({ message, title, open, onConfirm, onDismiss }) => {
  const { t } = useTranslation()

  const buttonActions = [
    {
      label: t('common.yes'),
      handleClick: onConfirm
    },
    {
      label: t('common.no'),
      handleClick: onDismiss
    }
  ]

  const actionButtons = buttonActions.map((item, index) => (
    <AppButton key={ item.label } onClick={ item.handleClick } variant={ index !== 0 ? 'tonal' : 'contained' }>
      { item.label }
    </AppButton>
  ))

  return (
    <Dialog
      PaperProps={ { sx: styles.root } } data-testid='confirmDialog' onClose={ onDismiss }
      open={ open }
    >
      <Typography sx={ styles.title } variant='h6'>
        { t(title) }
      </Typography>

      <IconButton onClick={ onDismiss } sx={ styles.icon }>
        <CloseIcon />
      </IconButton>

      <DialogContent dividers sx={ styles.content }>
        <Typography variant='subtitle1'>
          { t(message) }
        </Typography>
      </DialogContent>

      <DialogActions sx={ styles.actions }>
        { actionButtons }
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmDialog
