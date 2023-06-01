import { bikes } from '~/constants/constants'

const getLocalObject = () => JSON.parse(localStorage.getItem(bikes) || 'null')

export const getFromLocalStorage = (name) => {
  const localObject = getLocalObject()

  if (!localObject) {
    return null
  }

  return localObject[name]
}

export const setToLocalStorage = (name, item) => {
  const localObject = getLocalObject() || {}

  localObject[name] = item
  localStorage.setItem(bikes, JSON.stringify(localObject))
}

export const removeFromLocalStorage = (name) => {
  const localObject = getLocalObject()
  
  if (localObject) {
    delete localObject[name]
    localStorage.setItem(bikes, JSON.stringify(localObject))
  }
}
