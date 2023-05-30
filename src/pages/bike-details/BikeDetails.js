import { useCallback, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import { Container, Typography } from '@mui/material'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import StraightenIcon from '@mui/icons-material/Straighten'

import { useModalContext } from '~/context/modal-context'
import { bikesService } from '~/services/bikes-service'
import useAxios from '~/hooks/use-axios'
import useBreakpoints from '~/hooks/use-breakpoints'
import AppLoader from '~/components/app-loader/AppLoader'
import AppCarousel from '~/components/app-carousel/AppCarousel'
import AppRatingLarge from '~/components/app-rating-large/AppRatingLarge'
import AppButton from '~/components/app-button/AppButton'
import TitleWithDescription from '~/components/title-with-description/TitleWithDescription'
import ShowMoreCollapse from '~/components/show-more-collapse/ShowMoreCollapse'
import TechSpecification from '~/containers/bike-details/TechSpecification'
import SizeDialog from '~/containers/size-dialog/SizeDialog'

import { errorRoutes } from '~/routes/errorRoutes'
import { styles } from '~/pages/bike-details/BikeDetails.styles'
import { addCommas } from '~/utils/addCommas'

const BikesDetails = () => {
  const { t } = useTranslation()
  const { id = '' } = useParams()
  const { isDesktop, isMobile } = useBreakpoints()
  const { openModal } = useModalContext()
  const [toggle, setToggle] = useState(49)
  const navigate = useNavigate()

  const onToggleChange = (_, value) => {
    setToggle(value)
  }

  const getBikeById = useCallback(() => bikesService.getBikeById(id), [id])
  const responseError = useCallback(() => navigate(errorRoutes.notFound.path), [navigate])

  const { response: bike, loading: bikeLoading } = useAxios({
    service: getBikeById,
    onResponseError: responseError
  })

  if (bikeLoading && !bike) {
    return <AppLoader pageLoad size={ 70 } />
  }

  const openSizeGuideDialog = () => {
    openModal({ component: <SizeDialog /> })
  }

  const carouselImages = bike.images.map((image) => (
    <Box
      alt='item image' component='img' key={ image }
      src={ image } sx={ styles.img }
    />
  ))

  const sizeToggle = bike.sizes.map((size) => (
    <ToggleButton
      disableRipple key={ size } sx={ styles.sizeToggle }
      value={ size }
    >
      { size }
    </ToggleButton>
  ))

  const buttonGroup = (
    <Box sx={ styles.buttonGroup }>
      <AppButton fullWidth size='medium' variant='containedLight'>
        { t('bikeDetails.orderNow') }
      </AppButton>

      <AppButton fullWidth size='medium' variant='contained'>
        { t('bikeDetails.addToCart') }
      </AppButton>
    </Box>
  )

  const carouselSettings = {
    autoplayInterval: 5000,
    speed: 700,
    slidesToShow: 1,
    defaultControlsConfig: {
      pagingDotsStyle: styles.dotStyles(isDesktop)
    },
    leftButtonStyles: styles.arrowButton,
    rightButtonStyles: styles.arrowButton,
    style: styles.carousel
  }

  return (
    <Container sx={ styles.container }>
      <Box sx={ styles.imgWithInfo }>
        <AppCarousel settings={ carouselSettings }>
          { carouselImages }
        </AppCarousel>
        
        <Box sx={ styles.info }>
          <TitleWithDescription
            description={ `$ ${addCommas(bike.price)}` }
            sx={ styles.titleWithDescription }
            title={ bike.name }
          />

          <AppRatingLarge
            readOnly reviewsCount={ bike.ratingsQuantity } sx={ styles.rating }
            value={ bike.ratingsAverage }
          />

          <Typography sx={ styles.sizeTitle }>
            { t('bikeDetails.selectSize') }
          </Typography>

          <ToggleButtonGroup
            exclusive onChange={ onToggleChange } sx={ styles.sizeToggleGroup }
            value={ toggle }
          >
            { sizeToggle }
          </ToggleButtonGroup>

          <Box sx={ styles.sizeGuideContainer }>
            <Typography
              onClick={ openSizeGuideDialog }
              sx={ styles.sizeGuide }
            >
              { t('bikeDetails.sizeGuide') }
            </Typography>
            <StraightenIcon />
          </Box>

          { buttonGroup }
        </Box>
      </Box>

      <Box sx={ styles.cardWrapper }>
        <ShowMoreCollapse
          collapsedSize={ isMobile ? 80 : 70 }
          description={ bike.description ?? '' }
          title={ t('bikeDetails.bikeDescription') }
        />
      </Box>

      <Box sx={ styles.cardWrapper }>
        <TechSpecification bike={ bike } />
      </Box>
    </Container>
  )
}

export default BikesDetails
