import { useTranslation } from 'react-i18next'

import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { styles } from './AppSelect.styles'

const AppSelect = ({
  setValue,
  value,
  fields,
  selectTitle = '',
  sx,
  ...props
}) => {
  const { t } = useTranslation()

  const changeValue = (event) => setValue(event.target.value)

  const fieldsList = fields.map((field) => (
    <MenuItem key={ field.value } value={ field.value }>
      { t(field.title) }
    </MenuItem>
  ))

  const titleEl = selectTitle.length && (
    <Typography
      aria-label='select-title'
      sx={ styles.selectTitle }
      variant='body2'
    >
      { t(selectTitle) }
    </Typography>
  )

  return (
    <Box sx={ { ...styles.selectContainer, ...sx } }>
      { titleEl }

      <Select
        onChange={ changeValue }
        sx={ styles.selectField }
        value={ value }
        { ...props }
      >
        { fieldsList }
      </Select>
    </Box>
  )
}

export default AppSelect
