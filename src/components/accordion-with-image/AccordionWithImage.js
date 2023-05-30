import { useState } from 'react'

import Accordions from '../accordion/Accordions.js'
import Box from '@mui/material/Box'

import { styles } from './AccordionWithImage.styles'

const AccordionWithImage = ({ items }) => {
  const [activeItemId, setActiveItemId] = useState(0)

  return (
    <Box className='section' sx={ styles.feature }>
      <Box component='img' src={ items[activeItemId].image } sx={ styles.image } />
      <Accordions
        activeIndex={ activeItemId }
        items={ items }
        onChange={ (id) => setActiveItemId(id) }
        style={ styles.accordions }
      />
    </Box>
  )
}

export default AccordionWithImage
