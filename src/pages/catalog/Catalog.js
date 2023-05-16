import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import CatalogFiltersBlock from '../../containers/catalog-page/catalog-filters-block/CatalogFiltersBlock'
import { bikesService } from '../../services/bikes-service'
import useAxios from '../../hooks/use-axios'
import { useDrawer } from '../../hooks/use-drawer'
import useBreakpoints from '../../hooks/use-breakpoints'
import { useFilterQuery } from '../../hooks/use-filter-query'
import AppSelect from '../../components/app-select/AppSelect'
import AppDrawer from '../../components/app-drawer/AppDrawer'
import TitleWithDescription from '~/components/title-with-description/TitleWithDescription'
import CardWithLink from '../../components/card-with-link/CardWithLink'
import AppLoader from '~/components/app-loader/AppLoader'
import FiltersToggle from '../../containers/catalog-page/filters-toggle/FiltersToggle'

import { countActiveOfferFilters } from '../../utils/count-active-filters'
import { defaultFilters, sortFields } from './Catalog.constants'
import { styles } from '~/pages/catalog/Catalog.styles'

const Catalog = () => {
  const { t } = useTranslation()
  const { isDesktop } = useBreakpoints()
  const [sort, setSort] = useState('createdAt')
  const { openDrawer, closeDrawer, isOpen } = useDrawer()

  const { filters, activeFilterCount, searchParams, filterQueryActions } = useFilterQuery({
    defaultFilters,
    countActiveFilters: countActiveOfferFilters
  })

  const getBikes = useCallback((params) => bikesService.getBikes(params), [])

  const {
    response: bikesResponse,
    loading: bikesLoading,
    fetchData: fetchBikes
  } = useAxios({
    service: getBikes,
    fetchOnMount: false,
    defaultResponse: { count: 0, items: [] }
  })
  console.log(activeFilterCount)
  const { items: bikes } = bikesResponse

  useEffect(() => {
    fetchBikes({
      ...filters,
      limit: 5,
      skip: 0,
      sort
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchBikes, searchParams, sort])

  if (bikesLoading && !bikes.length) {
    return <AppLoader pageLoad size={ 70 } />
  }

  const bikesCards = bikes.map((item) => {
    return (
      <CardWithLink
        description={ item.price } img={ item.images[0] } key={ item.name }
        title={ item.name }
      />
    )
  })

  const toggleFilters = () => (isOpen ? closeDrawer() : openDrawer())

  const filtersBlock = (
    <CatalogFiltersBlock
      activeFilterCount={ activeFilterCount }
      closeFilters={ closeDrawer }
      filterActions={ filterQueryActions }
      filters={ filters }
      open={ isOpen }
    />
  )

  const filtersComponent = isDesktop ? (
    filtersBlock
  ) : (
    <AppDrawer onClose={ closeDrawer } open={ isOpen }>
      { filtersBlock }
    </AppDrawer>
  )

  return (
    <Box sx={ styles.container }>
      <Container>
        <TitleWithDescription
          description={ t('catalogPage.description') }
          sx={ styles.titleWithDescription }
          title={ t('catalogPage.title') }
        />

        <Box sx={ { display: 'flex', justifyContent: 'space-between' } }>
          <FiltersToggle chosenFiltersQty={ activeFilterCount } handleToggle={ toggleFilters } />

          <AppSelect
            fields={ sortFields } selectTitle={ t('common.sortBy') } setValue={ setSort }
            value={ sort }
          />
        </Box>

        <Box sx={ styles.content }>
          { filtersComponent }

          <Box sx={ styles.products }>
            { bikesCards }
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Catalog
