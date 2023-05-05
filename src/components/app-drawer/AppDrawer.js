import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import CloseRounded from '@mui/icons-material/CloseRounded'

import useConfirm from '../../hooks/use-confirm'

import { styles } from './AppDrawer.styles'

const AppDrawer = ({ children, onClose, anchor = 'right', closeIcon = true, ...props }) => {
  const { checkConfirmation } = useConfirm()

  const handleCloseDrawer = async () => {
    const confirmed = checkConfirmation({
      message: 'questions.unsavedChanges',
      title: 'titles.confirmTitle'
    })
    if (await confirmed) {
      onClose()
    }
  }

  return (
    <Drawer
      PaperProps={ { sx: styles.root } } anchor={ anchor } onClose={ () => void handleCloseDrawer() }
      { ...props }
    >
      { closeIcon && (
        <IconButton onClick={ () => void handleCloseDrawer() } sx={ styles.closeButton }>
          <CloseRounded sx={ styles.closeIcon } />
        </IconButton>
      ) }
      { children }
    </Drawer>
  )
}

export default AppDrawer
