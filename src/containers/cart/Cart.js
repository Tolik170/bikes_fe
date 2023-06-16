import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TableCell from '@mui/material/TableCell'
import Link from '@mui/material/Link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { useCart } from '~/hooks/use-cart'
import CartItemRow from '~/containers/cart/CartItemRow'
import DirectionLink from '~/components/direction-link/DirectionLink'
import TitleWithDescription from '~/components/title-with-description/TitleWithDescription'
import AppTable from '~/components/app-table/AppTable'

import { addCommas } from '~/utils/addCommas'
import { columns } from '~/containers/cart/Cart.constants'
import { styles } from '~/containers/cart/Cart.styles'
import { routesPath } from '~/routes/routesPath'

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
        <TitleWithDescription
          description={ `$ ${addCommas(getTotalPrice())}` }
          sx={ styles.totalPrice }
          title={ t('cart.total') }
        />
        

        <Link href={ routesPath.checkout.route } >
          <DirectionLink
            after={ <ArrowForwardIcon fontSize='small' /> }
            sx={ { mb: 0 } }
            title={ 'Go to checkout' }
          />
        </Link>
      </Box>
    </Box>
  )
}

export default Cart
