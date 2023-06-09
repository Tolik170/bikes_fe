export const regex = {
  name: /^[a-zа-яєії]+$/i,
  phoneNumber: /^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/,
  email: /^([a-z\d]+([._-][a-z\d]+)*)@([a-z\d]+([.-][a-z\d]+)*\.[a-z]{2,})$/i,
  cartQuantity: /^(?:[1-9]|10)$/
}
