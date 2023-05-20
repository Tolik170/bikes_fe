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
