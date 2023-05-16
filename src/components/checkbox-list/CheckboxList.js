import { useTranslation } from 'react-i18next'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'

import { styles } from './CheckboxList.styles'

const CheckboxList = ({ items, value = [], title, variant, onChange }) => {
  const { t } = useTranslation()

  const handleCheckbox = (checkbox) => {
    const updatedCheckboxes = value.includes(checkbox) ? value.filter((el) => el !== checkbox) : [...value, checkbox]
    onChange(updatedCheckboxes)
  }

  const checkboxesList = items.map((item) => (
    <FormControlLabel
      checked={ value.includes(item.value) }
      control={ <Checkbox sx={ styles.checkbox } /> }
      key={ item.value }
      label={ <Typography variant={ variant }>
        { t(item.title) }
      </Typography> }
      onChange={ () => handleCheckbox(item.value) }
    />
  ))

  const checkboxesTitle = title && (
    <Typography sx={ styles.title } variant='h6'>
      { t(title) }
    </Typography>
  )

  return (
    <Box sx={ styles.root }>
      { checkboxesTitle }
      { checkboxesList }
    </Box>
  )
}

export default CheckboxList
