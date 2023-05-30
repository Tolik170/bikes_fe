import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import TitleWithDescription from '~/components/title-with-description/TitleWithDescription'
import CardWithLink from '~/components/card-with-link/CardWithLink'
import AppLoader from '~/components/app-loader/AppLoader'

import { addCommas } from '~/utils/addCommas'
import { routesPath } from '~/routes/routesPath'
import { styles } from '~/containers/home-page/popular-items/PopularItems.styles'

const PopularItems = ({ items }) => {
  const { t } = useTranslation()

  const cards = items.map((item) => {
    return (
      <CardWithLink
        description={ `$ ${addCommas(item.price)}` }
        img={ item.previewImage }
        key={ item.name }
        link={ `${routesPath.bikeDetails.path}/${item._id}` }
        rating={ item.ratingsAverage }
        sx={ styles.card }
        title={ item.name }
      />
    )
  })

  return (
    <Box className='section' sx={ styles.container }>
      <TitleWithDescription title={ t('homePage.popularItems.title') } />

      <Box sx={ styles.cardsContainer }>
        { items.length ? cards : <AppLoader pageLoad size={ 50 } /> }
      </Box>

      <Button
        component={ Link } size='extraLarge' to={ routesPath.catalog.route }
        variant='contained'
      >
        { t('homePage.popularItems.seeAllProducts') }
      </Button>
    </Box>
  )
}

export default PopularItems
