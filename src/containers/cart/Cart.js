import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TableCell from '@mui/material/TableCell'

import { useCart } from '~/hooks/use-cart'
import CartItemRow from '~/containers/cart/CartItemRow'
import AppTable from '~/components/app-table/AppTable'
import AppButton from '~/components/app-button/AppButton'

import { addCommas } from '~/utils/addCommas'
import { columns } from '~/containers/cart/Cart.constants'
import { styles } from '~/containers/cart/Cart.styles'

const Cart = () => {
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

      <Box sx={ styles.totalAndBtn }>
        <Box sx={ styles.totalPriceWrapper }>
          <Typography sx={ styles.total }>
            { t('cart.total') }
          </Typography>

          { cartItems.length && (<Typography sx={ styles.price }>
            { `$ ${addCommas(getTotalPrice())}` }
          </Typography>) }
        </Box>

        <AppButton size='medium'>
          { t('cart.goToCheckout') }
        </AppButton>
      </Box>
    </Box>
  )
}

export default Cart
