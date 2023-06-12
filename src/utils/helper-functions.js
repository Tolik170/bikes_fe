export const parseQueryParams = (searchParams, defaultFilters) => {
  const filtersFromQuery = {}
  searchParams.forEach((value, key) => {
    if (key in defaultFilters) {
      if (key === 'price' || key === 'category') {
        filtersFromQuery[key] = value ? value.split(',') : []
      } else {
        filtersFromQuery[key] = value
      }
    }
  })
  return filtersFromQuery
}

export const getEmptyValues = (initialValues, defaultValue) => {
  return Object.keys(initialValues).reduce((acc, key) => ({ ...acc, [key]: defaultValue }), {})
}

export const createOrderData = (data, totalItemsPrice, items) => {
  const orderItems = items.map(item => item._id)

  return {
    recipient: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber
    },
    delivery: {
      city: data.city,
      warehouse: data.warehouse
    },
    totalItemsPrice,
    orderItems
  }
}

export const isObjectEmpty = (obj) => {
  return Object.keys(obj).length === 0
}
