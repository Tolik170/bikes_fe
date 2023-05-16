import { useTranslation } from 'react-i18next'
import Typography from '@mui/material/Typography'

import AppRange from '../../../components/app-range/AppRange'
import CheckboxList from '../../../components/checkbox-list/CheckboxList'
import FilterInput from '../../../components/filter-input/FilterInput'
import RadioButtonInputs from '../../../components/radio-button-inputs/RadioButtonInputs'

import { bikeCategories, radioButtonsTranslationKeys } from '../../../pages/catalog/Catalog.constants'
import { styles } from './CatalogFilterList.styles'

const CatalogFilterList = ({ updateFilterByKey, filters }) => {
  const { t } = useTranslation()

  const radioOptions = radioButtonsTranslationKeys.map(({ title, value }) => ({
    title: t(title),
    value
  }))

  const filterTitle = (title) => (<Typography sx={ styles.title }>
    { title }
  </Typography>)

  return (
    <>
      { filterTitle(t('catalogPage.filters.models')) }
      <CheckboxList
        items={ bikeCategories }
        onChange={ updateFilterByKey('category') }
        value={ filters.category }
        variant={ 'body1' }
      />
      { filterTitle(t('catalogPage.filters.price')) }
      <AppRange
        max={ 15000 } min={ 0 } onChange={ updateFilterByKey('price') }
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
