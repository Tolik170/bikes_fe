import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import CatalogFiltersBlock from '../../containers/catalog-page/catalog-filters-block/CatalogFiltersBlock'
// import { bikesService } from '../../services/bikes-service'
// import useAxios from '../../hooks/use-axios'
import { useDrawer } from '../../hooks/use-drawer'
import useBreakpoints from '../../hooks/use-breakpoints'
import { useFilterQuery } from '../../hooks/use-filter-query'
import AppSelect from '../../components/app-select/AppSelect'
import AppDrawer from '../../components/app-drawer/AppDrawer'
import TitleWithDescription from '../../components/title-with-description/TitleWithDescription'
import CardWithLink from '../../components/card-with-link/CardWithLink'
import FiltersToggle from '../../containers/catalog-page/filters-toggle/FiltersToggle'

import { countActiveOfferFilters } from '../../utils/count-active-filters'
import { popularItemsMock } from '../../containers/home-page/popular-items/PopularItemsCards'
import { defaultFilters } from './Catalog.constants'
import { styles } from './Catalog.styles'

const sortFields = [
  { value: 'newest', title: 'catalogPage.sort.newest' },
  { value: 'popularity', title: 'catalogPage.sort.popularity' },
  { value: 'priceAsc', title: 'catalogPage.sort.priceAsc' },
  { value: 'priceDesc', title: 'catalogPage.sort.priceDesc' }
]

const Catalog = () => {
  const { t } = useTranslation()
  const [sortByValue, setSortByValue] = useState('newest')
  const { openDrawer, closeDrawer, isOpen } = useDrawer()
  const { isDesktop } = useBreakpoints()

  const { filters, activeFilterCount, filterQueryActions } =
  useFilterQuery({
    defaultFilters,
    countActiveFilters: countActiveOfferFilters
  })

  // const getBikes = useCallback(() => bikesService.getBikes(), [])
  // const { response: bikes, loading } = useAxios({ service: getBikes })

  const bikesCards = popularItemsMock.map((item) => {
    return (
      <CardWithLink
        description={ item.price } img={ item.image } key={ item.title }
        title={ item.title }
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
        <TitleWithDescription title={ t('catalogPage.title') } />

        <Box>
          <AppSelect
            fields={ sortFields }
            selectTitle={ t('common.sortBy') }
            setValue={ setSortByValue }
            value={ sortByValue }
          // variant='standard'
          />
          <FiltersToggle
            chosenFiltersQty={ activeFilterCount }
            handleToggle={ toggleFilters }
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
