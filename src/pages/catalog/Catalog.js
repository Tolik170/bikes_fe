import { useCallback, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import { bikesService } from '~/services/bikes-service'
import { useDrawer } from '~/hooks/use-drawer'
import { useFilterQuery } from '~/hooks/use-filter-query'
import useAxios from '~/hooks/use-axios'
import useBreakpoints from '~/hooks/use-breakpoints'
import usePagination from '~/hooks/use-pagination'
import AppSelect from '~/components/app-select/AppSelect'
import AppDrawer from '~/components/app-drawer/AppDrawer'
import AppPagination from '~/components/app-pagination/AppPagination'
import NotFoundResults from '~/components/not-found-results/NotFoundResults'
import TitleWithDescription from '~/components/title-with-description/TitleWithDescription'
import CardWithLink from '~/components/card-with-link/CardWithLink'
import AppLoader from '~/components/app-loader/AppLoader'
import CatalogFiltersBlock from '~/containers/catalog-page/catalog-filters-block/CatalogFiltersBlock'
import FiltersToggle from '~/containers/catalog-page/filters-toggle/FiltersToggle'

import { addCommas } from '~/utils/addCommas'
import { countActiveOfferFilters } from '~/utils/count-active-filters'
import { routesPath } from '~/routes/routesPath'
import { defaultFilters, sortFields } from '~/pages/catalog/Catalog.constants'
import { styles } from '~/pages/catalog/Catalog.styles'

const Catalog = () => {
  const { t } = useTranslation()
  const { isDesktopLarge, isDesktop, isMobile } = useBreakpoints()
  const [sort, setSort] = useState('createdAt')
  const { openDrawer, closeDrawer, isOpen } = useDrawer()
  const itemsPerPage = isDesktopLarge ? 9 : 8

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
  const { items: bikes, count: bikesCount } = bikesResponse

  const {
    page,
    setPage,
    pageCount,
    rowsPerPage,
    handleChangePaginationController
  } = usePagination({
    defaultPage: Number(filters.page),
    itemsCount: bikesCount,
    itemsPerPage
  })

  useEffect(() => {
    setPage(1)
  }, [searchParams, setPage])

  const skip = useMemo(() => {
    if (!page) {
      return 0
    }
    return (page - 1) * rowsPerPage
  }, [page, rowsPerPage])

  useEffect(() => {
    fetchBikes({
      ...filters,
      limit: itemsPerPage,
      skip,
      sort
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchBikes, searchParams, itemsPerPage, skip, sort])

  useEffect(() => {
    return <AppLoader pageLoad size={ 70 } />
  }, [])

  const bikesCards = bikes.map((item) => {
    return (
      <CardWithLink
        description={ `$ ${addCommas(item.price)}` }
        img={ item.previewImage }
        key={ item.name }
        link={ `${routesPath.bikeDetails.path}/${item._id}` }
        sx={ styles.cardWithLink }
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

  const productsBlock = bikesLoading ? (
    <Box sx={ { width: '100%' } }>
      <AppLoader pageLoad size={ 70 } />
    </Box>
  ): !bikes.length && !bikesLoading ? (
    <NotFoundResults description={ t('common.notFound') } />
  ) : (
    <Box sx={ styles.products }>
      { bikesCards }
    </Box>
  )

  const filtersComponent = isDesktop ? (
    filtersBlock
  ) : (
    <AppDrawer onClose={ closeDrawer } open={ isOpen }>
      { filtersBlock }
    </AppDrawer>
  )

  const hidePaginationStyle = bikesLoading || !bikes.length && { visibility: 'hidden' }

  return (
    <Box sx={ styles.container }>
      <Container>
        <TitleWithDescription
          description={ t('catalogPage.description') }
          sx={ styles.titleWithDescription }
          title={ t('catalogPage.title') }
        />

        <Box sx={ styles.filterBarMenu }>
          <FiltersToggle chosenFiltersQty={ activeFilterCount } handleToggle={ toggleFilters } />

          { !isMobile && (
            <AppSelect
              fields={ sortFields } selectTitle={ t('common.sortBy') } setValue={ setSort }
              value={ sort }
            />
          ) }
        </Box>

        <Box sx={ styles.content }>
          { filtersComponent }

          { productsBlock }
        </Box>
        <AppPagination
          onChange={ handleChangePaginationController }
          page={ page }
          pageCount={ pageCount }
          size={ isMobile ? 'small' : 'medium' }
          sx={ hidePaginationStyle }
        />
      </Container>
    </Box>
  )
}

export default Catalog
