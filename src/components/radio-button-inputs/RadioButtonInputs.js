import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { styles } from './RadioButtonInputs.styles'

const RadioButtonInputs = ({ onChange, items, value, title }) => {
  const handleValueUpdate = (event) => {
    onChange(event.target.value)
  }

  const radioButtonList = items.map((radio) => (
    <FormControlLabel
      checked={ value === radio.value }
      control={ <Radio /> }
      key={ String(radio.value) }
      label={ radio.title }
      sx={ styles.radioItems }
      value={ radio.value }
    />
  ))

  const titleBlock = title && (
    <Typography sx={ styles.title } variant='h6'>
      { title }
    </Typography>
  )

  return (
    <Box>
      { titleBlock }

      <RadioGroup onChange={ handleValueUpdate }>
        { radioButtonList }
      </RadioGroup>
    </Box>
  )
}
export default RadioButtonInputs
