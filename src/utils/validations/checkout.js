import { emailField, emptyField, nameField, phoneNumberField } from './common'

export const checkoutValidations = {
  email: (value) => emailField(value),
  firstName: (value) => nameField(value),
  lastName: (value) => nameField(value),
  phoneNumber: (value) => phoneNumberField(value),
  city: (value) => emptyField(value, 'common.errorMessages.emptyField'),
  warehouse: (value) => emptyField(value)
}

export const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  city: '',
  warehouse: ''
}
