import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { createFilterOptions } from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { deliveryService } from '~/services/delivery-service'
import AppTextField from '~/components/app-text-field/AppTextField'
import AsyncAutocomplete from '~/components/async-auto-complete/AsyncAutoComplete'

import { styles } from '~/containers/checkout/checkout-form/CheckoutForm.styles'

const CheckoutForm = ({ handleInputChange, handleNonInputValueChange, handleBlur, data, errors }) => {
  const { t } = useTranslation()

  const filterOptions = (options, state) => {
    const defaultFilterOptions = createFilterOptions()
    return defaultFilterOptions(options, state).slice(0, 200)
  }

  const getWarehouses = useCallback(() => {
    if (data.city) {
      return deliveryService.getWarehouses({ city: data.city })
    }
  }, [data.city])

  const onCityChange = (_, value) => {
    if (data.city !== value) {
      handleNonInputValueChange('warehouse', '')
      handleNonInputValueChange('city', value?.description ?? '')
    }
  }

  const onWarehouseChange = (_, value) => {
    handleNonInputValueChange('warehouse', value?.description ?? '')
  }

  const titleWithNumber = (number, title) => (
    <Box sx={ styles.titleWithNumber }>
      <Typography sx={ styles.number }>
        { number }
      </Typography>
      <Typography sx={ styles.title }>
        { title }
      </Typography>
    </Box>
  )

  return (
    <Box sx={ styles.container }>
      { titleWithNumber(1, 'Contact Information') }

      <Box sx={ styles.textFieldWrapper }>
        <AppTextField
          autoFocus
          errorMsg={ t(errors.firstName) }
          fullWidth
          label={ t('common.labels.firstName') }
          onBlur={ handleBlur('firstName') }
          onChange={ handleInputChange('firstName') }
          required
          sx={ styles.textField }
          type='text'
          value={ data.firstName }
        />

        <AppTextField
          errorMsg={ t(errors.lastName) }
          fullWidth
          label={ t('common.labels.lastName') }
          onBlur={ handleBlur('lastName') }
          onChange={ handleInputChange('lastName') }
          required
          sx={ styles.textField }
          type='text'
          value={ data.lastName }
        />
      </Box>

      <AppTextField
        errorMsg={ t(errors.email) }
        fullWidth
        label={ t('common.labels.email') }
        onBlur={ handleBlur('email') }
        onChange={ handleInputChange('email') }
        required
        sx={ styles.textField }
        type='email'
        value={ data.email }
      />

      <AppTextField
        errorMsg={ t(errors.phoneNumber) }
        fullWidth
        label={ t('common.labels.phoneNumber') }
        onBlur={ handleBlur('phoneNumber') }
        onChange={ handleInputChange('phoneNumber') }
        required
        sx={ styles.textField }
        type='text'
        value={ data.phoneNumber }
      />

      { titleWithNumber(2, 'Delivery Options') }
      <AsyncAutocomplete
        fetchOnFocus
        filterOptions={ filterOptions }
        labelField='description'
        onBlur={ handleBlur('city') }
        onChange={ onCityChange }
        service={ deliveryService.getCities }
        textFieldProps={ {
          label: t('checkout.labels.cities'),
          error: Boolean(errors.city),
          helperText: t(errors.city) || ' ',
          sx: styles.textField,
          required: true
        } }
        value={ data.city }
        valueField='description'
      />

      <AsyncAutocomplete
        axiosProps={ { clearResponse: true } }
        disabled={ !data.city }
        filterOptions={ filterOptions }
        labelField='description'
        onBlur={ handleBlur('warehouse') }
        onChange={ onWarehouseChange }
        service={ getWarehouses }
        textFieldProps={ {
          label: t('checkout.labels.warehouse'),
          error: Boolean(errors.warehouse),
          helperText: t(errors.warehouse) || ' ',
          required: true
        } }
        value={ data.warehouse }
        valueField='description'
      />
    </Box>
  )
}

export default CheckoutForm
