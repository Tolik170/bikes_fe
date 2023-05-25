import Carousel from 'nuka-carousel'
import IconButton from '@mui/material/IconButton'
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded
} from '@mui/icons-material'


const AppCarousel = ({ children, settings }) => {
  const leftArrow = ({ previousSlide }) => (
    <IconButton onClick={ previousSlide } sx={ settings?.leftButtonStyles }>
      <ArrowBackIosRounded sx={ settings?.leftArrowStyles } />
    </IconButton>
  )

  const rightArrow = ({ nextSlide }) => (
    <IconButton onClick={ nextSlide } sx={ settings?.rightButtonStyles }>
      <ArrowForwardIosRounded sx={ settings?.rightArrowStyles } />
    </IconButton>
  )

  return (
    <Carousel
      autoplay
      renderCenterLeftControls={ leftArrow }
      renderCenterRightControls={ rightArrow }
      withoutControls={ Number(settings?.slidesToShow) > children.length }
      wrapAround={ children.length > Number(settings?.slidesToShow) }
      { ...settings }
    >
      { children }
    </Carousel>
  )
}

export default AppCarousel
