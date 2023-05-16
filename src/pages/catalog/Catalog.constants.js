export const defaultFilters = {
  sort: 'createdAt',
  rating: '0',
  name: '',
  category: [],
  price: undefined,
  page: '1'
}

export const bikeCategories = [
  { value: 'Mountain', title: 'common.bikeModels.mountain' },
  { value: 'Road', title: 'common.bikeModels.road' },
  { value: 'Electric', title: 'common.bikeModels.turboElectric' }
]

export const sortFields = [
  { value: 'createdAt', title: 'catalogPage.sort.newest' },
  { value: 'purchasedCount', title: 'catalogPage.sort.popularity' },
  { value: 'priceAsc', title: 'catalogPage.sort.priceAsc' },
  { value: 'priceDesc', title: 'catalogPage.sort.priceDesc' }
]

export const radioButtonsTranslationKeys = [
  { title: 'catalogPage.filters.any', value: 0 },
  { title: 'catalogPage.filters.5stars', value: 5 },
  { title: 'catalogPage.filters.4stars', value: 4 },
  { title: 'catalogPage.filters.3stars', value: 3 }
]
