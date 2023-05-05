export const defaultFilters = {
  sort: 'createdAt',
  rating: '0',
  name: '',
  model: [],
  price: undefined,
  page: '1'
}

export const defaultResponse = {
  minPrice: 0,
  maxPrice: 1000
}

export const bikeModels = {
  mountain: 'Mountain Bikes',
  road: 'Road Bikes',
  electric: 'Turbo E-Bikes'
}

export const sortFields = [
  { value: 'createdAt', title: 'catalogPage.sort.newest' },
  { value: 'popularity', title: 'catalogPage.sort.popularity' },
  { value: 'priceAsc', title: 'catalogPage.sort.priceAsc' },
  { value: 'priceDesc', title: 'catalogPage.sort.priceDesc' }
]

export const radioButtonsTranslationKeys = [
  { title: 'catalogPage.filters.any', value: 0 },
  { title: 'catalogPage.filters.5stars', value: 5 },
  { title: 'catalogPage.filters.4stars', value: 4 },
  { title: 'catalogPage.filters.3stars', value: 3 }
]
