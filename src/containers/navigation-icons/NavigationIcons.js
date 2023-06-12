import { useCallback, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import LanguageIcon from '@mui/icons-material/Language'
import LoginIcon from '@mui/icons-material/Login'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import Badge from '@mui/material/Badge'

import { useModalContext } from '~/context/modal-context'
import { useSnackBarContext } from '~/context/snackbar-context'
import { useCart } from '~/hooks/use-cart'
import Cart from '~/containers/cart/Cart'

import { snackbarVariants } from '~/constants/constants'
import { styles } from '~/containers/navigation-icons/NavigationIcons.styles'

const NavigationIcons = ({ setIsSidebarOpen }) => {
  const { t } = useTranslation()
  const { setAlert } = useSnackBarContext()
  const { openModal, closeModal } = useModalContext()
  const { cartItems } = useCart()
  const itemsCount = useMemo(() => cartItems.reduce((acc, item) => acc + item.quantity, 0), [cartItems])

  const openWishList = useCallback(() => {
    itemsCount
      ? openModal({ component: <Cart /> })
      : setAlert({
        severity: snackbarVariants.info,
        message: 'cart.emptyCart',
        duration: 5000
      })
  }, [openModal, setAlert, itemsCount])

  useEffect(() => {
    !itemsCount && closeModal()
  }, [closeModal, itemsCount])

  return (
    <Box sx={ styles.iconBox }>
      <Tooltip arrow title={ t('iconsTooltip.language') }>
        <IconButton sx={ styles.langIcon }>
          <LanguageIcon color='primary' />
        </IconButton>
      </Tooltip>

      <Badge badgeContent={ itemsCount } color='primary'>
        <Tooltip arrow title={ t('iconsTooltip.cart') }>
          <IconButton onClick={ openWishList }>
            <ShoppingCartOutlinedIcon color='primary' />
          </IconButton>
        </Tooltip>
      </Badge>

      <Tooltip arrow title={ t('iconsTooltip.login') }>
        <IconButton>
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
