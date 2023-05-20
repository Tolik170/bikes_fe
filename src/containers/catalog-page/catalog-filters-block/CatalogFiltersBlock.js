import { useTranslation } from 'react-i18next'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'

import CatalogFilterList from '../catalog-filters-list/CatalogFiltersList'
import FiltersToggle from '../filters-toggle/FiltersToggle'
import AppButton from '../../../components/app-button/AppButton'
import AppSelect from '../../../components/app-select/AppSelect'
import useBreakpoints from '../../../hooks/use-breakpoints'

import { sortFields } from '../../../pages/catalog/Catalog.constants'
import { styles } from './CatalogFilterBlock.styles'

const CatalogFiltersBlock = ({ filters, filterActions, activeFilterCount, closeFilters, open }) => {
  const { t } = useTranslation()
  const { isDesktop, isMobile } = useBreakpoints()
  const { updateFilter, resetFilters, updateQueryParams } = filterActions

  const sortOptions = sortFields.map(({ title, value }) => ({
    title: t(title),
    value
  }))

  const updateFilterByKey = (key) => (value) => updateFilter(value, key)
  const handleApplyFilters = () => {
    updateQueryParams()
    !isDesktop && closeFilters()
  }

  const filterBar = !isDesktop && (
    <>
      <FiltersToggle chosenFiltersQty={ activeFilterCount } />
      <Divider />
    </>
  )

  const select = isMobile && (
    <AppSelect
      fields={ sortOptions }
      fullWidth
      selectTitle={ t('common.sortBy') }
      setValue={ updateFilterByKey('sort') }
      size='small'
      sx={ styles.select }
      value={ filters.sort }
    />
  )

  const buttonActions = [
    {
      label: t('catalogPage.filters.apply'),
      handleClick: handleApplyFilters
    },
    {
      label: t('catalogPage.filters.clear'),
      handleClick: resetFilters
    }
  ]

  const actionButtons = buttonActions.map((item, index) => (
    <AppButton key={ item.label } onClick={ item.handleClick } variant={ index !== 0 ? 'tonal' : 'contained' }>
      { item.label }
    </AppButton>
  ))

  return (
    <Stack spacing={ 2 } sx={ styles.root(open) }>
      { filterBar }
      { select }

      <CatalogFilterList
        filters={ filters }
        updateFilterByKey={ updateFilterByKey }
      />

      { actionButtons }
    </Stack>
  )
}

export default CatalogFiltersBlock
