import { useState } from 'react'
import Box from '@mui/material/Box'
import { useTranslation } from 'react-i18next'
import MobileStepper from '@mui/material/MobileStepper'
import Typography from '@mui/material/Typography'
import SwipeableViews from 'react-swipeable-views'
import { styles } from './CarouselWithImage.styles'

const CarouselWithImage = ({ items }) => {
  const { t } = useTranslation()
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = items.length

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  const carouselWrapper = items.map((item, index) => (
    <Box key={ index } sx={ styles.feature }>
      <Box
        alt={ item.image } component='img' src={ item.image }
        sx={ styles.image }
      />
      <Box sx={ styles.text }>
        <Typography sx={ { color: 'basic.white' } } variant={ 'h6' }>
          { t(item.title) }
        </Typography>
        <Typography sx={ { color: 'basic.white', fontSize: '14px' } } variant={ 'subtitle1' }>
          { t(item.description) }
        </Typography>
      </Box>
    </Box>
  ))

  return (
    <>
      <SwipeableViews enableMouseEvents index={ activeStep } onChangeIndex={ handleStepChange }>
        { carouselWrapper }
      </SwipeableViews>
      <MobileStepper
        activeStep={ activeStep }
        position='static'
        steps={ maxSteps }
        sx={ styles.dots }
        variant='dots'
      />
    </>
  )
}
export default CarouselWithImage
