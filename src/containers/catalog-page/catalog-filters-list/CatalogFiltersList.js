// import { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Typography from '@mui/material/Typography'

import AppRange from '../../../components/app-range/AppRange'
import CheckboxList from '../../../components/checkbox-list/CheckboxList'
import FilterInput from '../../../components/filter-input/FilterInput'
import RadioButtonInputs from '../../../components/radio-button-inputs/RadioButtonInputs'

import { bikeModels, radioButtonsTranslationKeys } from '../../../pages/catalog/Catalog.constants'
import { styles } from './CatalogFilterList.styles'
// import useAxios from '~/hooks/use-axios'
// import { OfferService } from '~/services/offer-service'

const CatalogFilterList = ({ updateFilterByKey, filters }) => {
  const { t } = useTranslation()
  const modelOptions = Object.values(bikeModels)

  const radioOptions = radioButtonsTranslationKeys.map(({ title, value }) => ({
    title: t(title),
    value
  }))

  // const getPriceRange = useCallback(
  //   () => OfferService.getPriceRange({ authorRole: filters.authorRole }),
  //   [filters.authorRole]
  // )

  // const { response, fetchData } = useAxios({
  //   service: getPriceRange,
  //   fetchOnMount: false,
  //   defaultResponse
  // })

  // useEffect(() => {
  //   void fetchData()
  // }, [fetchData])

  const filterTitle = (title) => (<Typography sx={ styles.title }>
    { title }
  </Typography>)

  return (
    <>
      { filterTitle(t('catalogPage.filters.models')) }
      <CheckboxList
        items={ modelOptions }
        onChange={ updateFilterByKey('level') }
        value={ filters.level }
        variant={ 'body2' }
      />
      { filterTitle(t('catalogPage.filters.price')) }
      <AppRange
        max={ 200 } //response.maxPrice
        min={ 0 } //response.minPrice
        onChange={ updateFilterByKey('price') }
        value={ filters.price }
      />
      { filterTitle(t('catalogPage.filters.rating')) }
      <RadioButtonInputs items={ radioOptions } onChange={ updateFilterByKey('rating') } value={ Number(filters.rating) } />
      { filterTitle(t('catalogPage.filters.search')) }
      <FilterInput onChange={ updateFilterByKey('name') } value={ filters.name || '' } />
    </>
  )
}

export default CatalogFilterList
