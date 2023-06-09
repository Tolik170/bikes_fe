import { regex } from '~/constants/regex'

const validations = {
  name: (value) => {
    if (value.length > 30) {
      return 'common.errorMessages.nameLength'
    }
    if (!RegExp(regex.name).test(value)) {
      return 'common.errorMessages.nameAlphabeticOnly'
    }
    return ''
  },
  phoneNumber: (value) => {
    if (!RegExp(regex.phoneNumber).test(value)) {
      return 'common.errorMessages.numbersOnly'
    }
    if (Number(value) < 0) {
      return 'common.errorMessages.positiveNumbersOnly'
    }
    return ''
  },
  email: (value) => {
    if (!RegExp(regex.email).test(value)) {
      return 'common.errorMessages.emailValid'
    }
    return ''
  }
}

export const emptyField = (value, emptyMessage = 'common.errorMessages.emptyField', helperText) => {
  if (!value) {
    return emptyMessage
  }
  return helperText
}

export const nameField = (value) => helperTextHandler(value, 'name')

export const phoneNumberField = (value, errorMessage) => helperTextHandler(value, 'phoneNumber', errorMessage)

export const emailField = (value) => helperTextHandler(value, 'email')

export const textField = (min, max) => (value) => {
  if (value.length !== 0 && value.length < min) {
    return 'common.errorMessages.shortText'
  }
  if (value.length > max) {
    return 'common.errorMessages.longText'
  }
}

export const helperTextHandler = (value, marker, emptyMessage) =>
  emptyField(value, emptyMessage, validations[marker](value))
