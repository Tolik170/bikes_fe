import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'

import { styles } from './AppTextField.styles'

const AppTextField = ({ errorMsg, multiline, ...props }) => {
  const helperText = errorMsg ? (
    <Tooltip title={ errorMsg }>
      <Typography variant='caption'>
        { errorMsg }
      </Typography>
    </Tooltip>
  ) : (
    ' '
  )

  return (
    <TextField
      FormHelperTextProps={ { sx: styles.helperText(multiline) } }
      error={ Boolean(errorMsg) }
      helperText={ helperText }
      multiline={ multiline }
      { ...props }
    />
  )
}

export default AppTextField
