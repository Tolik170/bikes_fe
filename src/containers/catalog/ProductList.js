import Box from '@mui/material/Box'

import ClickableCard from '../../components/clickable-card/ClickableCard'
import TitleWithDescription from '../../components/title-with-description/TitleWithDescription'

import { popularItemsMock } from '../../containers/home-page/popular-items/PopularItemsCards'
import { styles } from './ProductList.styles'

const ProductList = () => {
  const bikesCards = popularItemsMock.map((item) => {
    return (
      <ClickableCard
        image={ item.image } key={ item.title } name={ item.title }
        price={ item.price } style={ styles }
      />
    )
  })

  return (
    <Box sx={ styles.container }>
      <TitleWithDescription title='Catalog' titleStyles={ styles.title } />

      <Box sx={ styles.content }>
        <Box sx={ { width: '270px', backgroundColor: 'primary.100' } } />

        <Box sx={ styles.products }>
          { bikesCards }
        </Box>
      </Box>
    </Box>
  )
}

export default ProductList
