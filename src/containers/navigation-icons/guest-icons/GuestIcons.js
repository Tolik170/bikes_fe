import { useTranslation } from 'react-i18next'

import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import LanguageIcon from '@mui/icons-material/Language'
import LoginIcon from '@mui/icons-material/Login'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import SearchIcon from '@mui/icons-material/Search'
import MenuIcon from '@mui/icons-material/Menu'

import { styles } from '../NavigationIcons.styles'

const GuestIcons = ({ openLoginDialog, setIsSidebarOpen }) => {
  const { t } = useTranslation()

  return (
    <Box sx={ styles.iconBox }>
      <Tooltip arrow title={ t('iconsTooltip.language') }>
        <IconButton sx={ styles.langIcon }>
          <LanguageIcon color='primary' />
        </IconButton>
      </Tooltip>

      <Tooltip arrow title={ t('iconsTooltip.favorites') }>
        <IconButton>
          <FavoriteBorderIcon color='primary' />
        </IconButton>
      </Tooltip>

      <Tooltip arrow title={ t('iconsTooltip.search') }>
        <IconButton>
          <SearchIcon color='primary' />
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

export default GuestIcons
