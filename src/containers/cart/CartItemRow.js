import { useEffect, useState } from 'react'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'

import { regex } from '~/constants/regex'
import { styles } from '~/containers/cart/Cart.styles'

const CartItemRow = ({ item, columns, rowActions, changeQuantity }) => {
  const [count, setCount] = useState(item.quantity)

  const onChange = (e) => {
    if (!e.target.value) setCount(1)
    if (regex.cartQuantity.test(e.target.value)) setCount(Number(e.target.value))
  }

  const tableCells = columns.map(({ field, calculatedCellValue, sx }) => {
    let cellValue = ''

    if (calculatedCellValue) {
      cellValue = calculatedCellValue(item, count, onChange)
    } else {
      cellValue = item[field]?.toString()
    }

    return (
      <TableCell key={ field } sx={ [styles.tableCell, sx] }>
        { cellValue }
      </TableCell>
    )
  })

  const actionCells = rowActions.map(({ label, func }) => (
    <TableCell key={ label } onClick={ () => func(item) } sx={ styles.tableCell }>
      <Typography sx={ styles.actionCellText }>
        { label }
      </Typography>
    </TableCell>
  ))

  useEffect(() => {
    changeQuantity(item._id, count)
  }, [item._id, changeQuantity, count])

  return (
    <TableRow key={ item._id } style={ styles.bodyRow }>
      { tableCells }
      { actionCells }
    </TableRow>
  )
}

export default CartItemRow
