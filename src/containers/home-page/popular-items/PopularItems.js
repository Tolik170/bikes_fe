import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import TitleWithDescription from '../../../components/title-with-description/TitleWithDescription'
import ClickableCard from '../../../components/clickable-card/ClickableCard'

import { popularItemsMock } from './PopularItemsCards'
import { styles } from './PopularItems.styles'

const PopularItems = () => {
  const { t } = useTranslation()

  const cards = popularItemsMock.map((item) => {
    return (
      <ClickableCard
        image={ item.image } key={ item.title } name={ item.title }
        price={ item.price } 
      />
    )
  })

  return (
    <Box className='section' sx={ styles.container }>
      <TitleWithDescription title={ t('homePage.popularItems.title') } titleStyles={ styles.sectionTitle } />

      <Box sx={ styles.cardsContainer }>
        { cards }
      </Box>

      <Button
        component={ Link } size='extraLarge' to={ '/catalog' }
        variant='contained'
      >
        { t('homePage.popularItems.seeAllProducts') }
      </Button>
    </Box>
  )
}

export default PopularItems
