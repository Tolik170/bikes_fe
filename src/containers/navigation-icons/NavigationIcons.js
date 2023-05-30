import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import LanguageIcon from '@mui/icons-material/Language'
import LoginIcon from '@mui/icons-material/Login'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MenuIcon from '@mui/icons-material/Menu'

import { styles } from '~/containers/navigation-icons/NavigationIcons.styles'

const NavigationIcons = ({ setIsSidebarOpen }) => {
  const { t } = useTranslation()

  //const { openModal } = useContext(ModalContext)

  //   const openLoginDialog = useCallback(() => {
  //     openModal({ component: <LoginDialog /> })
  //   }, [openModal])

  const openLoginDialog = useCallback(() => {
    console.log('open login dialog')
  }, [])

  return (
    <Box sx={ styles.iconBox }>
      <Tooltip arrow title={ t('iconsTooltip.language') }>
        <IconButton sx={ styles.langIcon }>
          <LanguageIcon color='primary' />
        </IconButton>
      </Tooltip>

      <Tooltip arrow title={ t('iconsTooltip.cart') }>
        <IconButton>
          <ShoppingCartOutlinedIcon color='primary' />
        </IconButton>
      </Tooltip>

      <Tooltip arrow title={ t('iconsTooltip.login') }>
        <IconButton onClick={ openLoginDialog } >
          <LoginIcon color='primary' />
        </IconButton>
      </Tooltip>

      <Tooltip arrow title={ t('iconsTooltip.menu') }>
        <IconButton onClick={ () => setIsSidebarOpen(true) } sx={ styles.menuIcon }>
          <MenuIcon color='primary' />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default NavigationIcons
