import IconButton from '@mui/material/IconButton'
import ClearIcon from '@mui/icons-material/Clear'
import SearchIcon from '@mui/icons-material/Search'

import AppTextField from '../../components/app-text-field/AppTextField'

const FilterInput = ({ value, onChange, ...props }) => {
  const handleInputChange = (event) => {
    onChange(event.target.value)
  }

  const inputProps = {
    endAdornment: value ? (
      <IconButton onClick={ () => onChange('') } sx={ { p: 0 } }>
        <ClearIcon color='secondary' />
      </IconButton>
    ) : (
      <SearchIcon color='primary' />
    )
  }

  return (
    <AppTextField
      InputProps={ inputProps } onChange={ handleInputChange } size='small'
      value={ value } { ...props }
    />
  )
}

export default FilterInput
