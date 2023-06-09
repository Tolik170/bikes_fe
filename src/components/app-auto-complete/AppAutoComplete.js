import { Fragment } from 'react'

import TextField from '@mui/material/TextField'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'

import AppLoader from '~/components/app-loader/AppLoader'

const defaultFilterOptions = (options, state) => {
  const filterOptions = createFilterOptions()
  return filterOptions(options, state)
}

const AppAutoComplete = ({
  filterOptions = defaultFilterOptions,
  ListboxProps = { style: { maxHeight: 150 } },
  options = [],
  hideClearIcon = false,
  textFieldProps = {},
  ...props
}) => {
  return (
    <Autocomplete
      ListboxProps={ ListboxProps }
      filterOptions={ filterOptions }
      isOptionEqualToValue={ (option, value) => option === value }
      options={ options || [] }
      { ...props }
      renderInput={ (params) => (
        <TextField
          { ...params }
          { ...textFieldProps }
          InputProps={ {
            ...params.InputProps,
            ...textFieldProps.InputProps,
            endAdornment: (
              <Fragment>
                { props.loading ? (
                  <AppLoader size={ 20 } sx={ { color: 'primary.600' } } />
                ) : null }
                { props.value &&
                  !hideClearIcon &&
                  params.InputProps.endAdornment }
              </Fragment>
            )
          } }
        />
      ) }
    />
  )
}

export default AppAutoComplete
