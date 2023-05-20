import { useTranslation } from 'react-i18next'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { styles } from '~/components/app-select/AppSelect.styles'


const AppSelect =({
  setValue,
  value,
  fields,
  selectTitle,
  sx = {},
  label,
  ...props
}) => {
  const { t } = useTranslation()

  const changeValue = (e) =>
    setValue(e.target.value)

  const fieldsList = fields.map((field) => (
    <MenuItem key={ field.title } value={ field.value }>
      { t(field.title) }
    </MenuItem>
  ))
  const titleEl = selectTitle && (
    <Typography
      aria-label='select-title'
      sx={ { ...styles.title, ...sx.title } }
      variant='body2'
    >
      { t(selectTitle) }
    </Typography>
  )

  return (
    <Box sx={ { ...styles.container, ...sx.container } }>
      { titleEl }
      <FormControl fullWidth sx={ styles.formControl }>
        <InputLabel id='select-label'>
          { label }
        </InputLabel>
        <Select
          inputProps={ { 'data-testid': 'app-select' } }
          label={ label }
          labelId='select-label'
          onChange={ changeValue }
          sx={ styles.selectField }
          value={ value }
          { ...props }
        >
          { fieldsList }
        </Select>
      </FormControl>
    </Box>
  )
}

export default AppSelect
