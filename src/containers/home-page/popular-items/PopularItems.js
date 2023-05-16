import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import TitleWithDescription from '../../../components/title-with-description/TitleWithDescription'
import CardWithLink from '../../../components/card-with-link/CardWithLink'

import { popularItemsMock } from './PopularItemsCards'
import { routesPath } from '../../../routes/routesPath'
import { styles } from './PopularItems.styles'

const PopularItems = () => {
  const { t } = useTranslation()

  const cards = popularItemsMock.map((item) => {
    return (
      <CardWithLink
        description={ item.price } img={ item.image } key={ item.name }
        link={ '#' } sx={ styles.card } title={ item.name }
      />
    )
  })

  return (
    <Box className='section' sx={ styles.container }>
      <TitleWithDescription title={ t('homePage.popularItems.title') } />

      <Box sx={ styles.cardsContainer }>
        { cards }
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
