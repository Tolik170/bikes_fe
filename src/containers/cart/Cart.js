import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TableCell from '@mui/material/TableCell'

import { useCart } from '~/hooks/use-cart'
import useBreakpoints from '~/hooks/use-breakpoints'
import CartItemRow from '~/containers/cart/CartItemRow'
import TitleWithDescription from '~/components/title-with-description/TitleWithDescription'
import AppTable from '~/components/app-table/AppTable'
import AppButton from '~/components/app-button/AppButton'

import { addCommas } from '~/utils/addCommas'
import { columns } from '~/containers/cart/Cart.constants'
import { styles } from '~/containers/cart/Cart.styles'

const Cart = () => {
  const { isMobile } = useBreakpoints()
  const { t } = useTranslation()
  const { cartItems, cartOperations } = useCart()
  const { getTotalPrice, changeQuantity, removeFromCart } = cartOperations

  const rowActions = [
    {
      label: t('common.remove'),
      func: removeFromCart
    }
  ]

  const headCells = columns.map((column) => (
    <TableCell key={ column.field } sx={ styles.headCells }>
      { t(column.label) }
    </TableCell>
  ))

  const bodyRows = cartItems.map((item) => (
    <CartItemRow
      changeQuantity={ changeQuantity } columns={ columns } item={ item }
      key={ item._id } rowActions={ rowActions }
    />
  ))

  return (
    <Box sx={ styles.container }>
      <Typography sx={ styles.title }>
        { t('cart.title') }
      </Typography>

      <AppTable bodyRows={ bodyRows } headCells={ headCells } sx={ styles.table } />

      <Box sx={ styles.TotalAndBtn }>
        <TitleWithDescription
          description={ `$ ${addCommas(getTotalPrice())}` }
          sx={ styles.totalPrice }
          title={ t('cart.total') }
        />
        

        <AppButton size={ isMobile ? 'small' : 'medium' }>
          { t('cart.goToCheckout') }
        </AppButton>
      </Box>
    </Box>
  )
}

export default Cart
