import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'

import { addCommas } from '~/utils/addCommas'
import { routesPath } from '~/routes/routesPath'
import { styles } from '~/containers/cart/Cart.styles'

export const columns = [
  {
    label: 'cart.table.product',
    field: 'image',
    calculatedCellValue: (item) => <img alt='product' src={ item.image } style={ styles.imgCell } />
  },
  {
    field: 'name',
    calculatedCellValue: (item) => (
      <Link href={ `${routesPath.bikeDetails.path}/${item._id}` } sx={ styles.nameCell }>
        { item.name }
      </Link>
    )
  },
  {
    label: 'cart.table.size',
    field: 'size'
  },
  {
    label: 'cart.table.quantity',
    field: 'quantity',
    calculatedCellValue: (_, count, onChange) => (
      <TextField
        onChange={ onChange } size='small' sx={ styles.quantity }
        type='number' value={ count }
      />
    )
  },
  {
    label: 'cart.table.price',
    field: 'price',
    calculatedCellValue: (item, quantity) => `$ ${addCommas(item.price * quantity)}`,
    sx: styles.priceCell
  }
]
