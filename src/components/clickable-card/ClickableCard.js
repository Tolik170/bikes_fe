import Box from '@mui/material/Box'

import TitleWithDescription from '../title-with-description/TitleWithDescription'

import { styles } from './ClickableCard.styles'

const ClickableCard = ({ image, name, price, colors, onClickHandler, style }) => {
  return (
    <Box onClick={ onClickHandler } sx={ { ...styles.cardWrapper, ...style?.cardWrapper } }>
      <Box sx={ styles.cardImgContainer }>
        <Box
          alt={ name } component='img' src={ image }
          sx={ { ...styles.cardImg, ...style?.cardImg } }
        />
      </Box>

      <TitleWithDescription
        description={ price }
        descriptionStyles={ { ...styles.cardDescription, ...style?.cardDescription } }
        title={ name }
        titleStyles={ { ...styles.cardTitle, ...style?.cardDescription } }
      />
    </Box>
  )
}

export default ClickableCard
