import { useCallback, useEffect, useMemo } from 'react'

import AppAutoComplete from '~/components/app-auto-complete/AppAutoComplete'
import useAxios from '~/hooks/use-axios'

const AsyncAutocomplete = ({
  textFieldProps,
  valueField,
  labelField,
  value,
  service,
  axiosProps,
  fetchOnFocus,
  ...props
}) => {
  const { loading, response, fetchData } = useAxios({
    service,
    fetchOnMount: false,
    defaultResponse: [],
    ...axiosProps
  })

  useEffect(() => {
    if(!fetchOnFocus) fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [service])

  const onFocus = useCallback(() => {
    !response.length && fetchOnFocus && fetchData()
  }, [response.length, fetchOnFocus, fetchData])

  const valueOption = useMemo(
    () => response.find((option) => (valueField ? option[valueField] : option) === value) || null,
    [response, value, valueField]
  )

  const getOptionLabel = useMemo(() => (option) => (labelField ? option[labelField] : option) || '', [labelField])

  const isOptionEqualToValue = (option, value) => {
    if (valueField) {
      return option?.[valueField] === value?.[valueField]
    }
    return option === value
  }

  return (
    <AppAutoComplete
      getOptionLabel={ getOptionLabel }
      isOptionEqualToValue={ isOptionEqualToValue }
      loading={ loading }
      onFocus={ onFocus }
      options={ response }
      textFieldProps={ textFieldProps }
      value={ valueOption }
      { ...props }
    />
  )
}

export default AsyncAutocomplete
