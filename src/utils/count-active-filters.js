import { parseQueryParams } from './helper-functions'
import { isDefaultPrice, isEmptyArray } from './range-filter'

export const countActiveOfferFilters = (searchParams, defaultFilters) => {
  const ignoredFields = ['sort']
  const filtersFromQuery = parseQueryParams(searchParams, defaultFilters) ?? {}

  return Object.entries(filtersFromQuery).reduce((count, [key, value]) => {
    if (ignoredFields.includes(key)) {
      return count
    }

    if (key === 'price' && isDefaultPrice(value, defaultFilters.price)) {
      return count
    }

    if (isEmptyArray(value)) {
      return count
    }

    return count + (value !== defaultFilters[key] ? 1 : 0)
  }, 0)
}
