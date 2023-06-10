import { useCallback, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import { Container, Typography } from '@mui/material'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import StraightenIcon from '@mui/icons-material/Straighten'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import { useModalContext } from '~/context/modal-context'
import { useSnackBarContext } from '~/context/snackbar-context'
import { bikesService } from '~/services/bikes-service'
import { useCart } from '~/hooks/use-cart'
import useAxios from '~/hooks/use-axios'
import useBreakpoints from '~/hooks/use-breakpoints'
import AppLoader from '~/components/app-loader/AppLoader'
import AppCarousel from '~/components/app-carousel/AppCarousel'
import AppRatingLarge from '~/components/app-rating-large/AppRatingLarge'
import AppButton from '~/components/app-button/AppButton'
import DirectionLink from '~/components/direction-link/DirectionLink'
import TitleWithDescription from '~/components/title-with-description/TitleWithDescription'
import ShowMoreCollapse from '~/components/show-more-collapse/ShowMoreCollapse'
import TechSpecification from '~/containers/bike-details/TechSpecification'
import SizeDialog from '~/containers/size-dialog/SizeDialog'

import { routesPath } from '~/routes/routesPath'
import { addCommas } from '~/utils/addCommas'
import { snackbarVariants } from '~/constants/constants'
import { styles } from '~/pages/bike-details/BikeDetails.styles'

const BikesDetails = () => {
  const { t } = useTranslation()
  const { id = '' } = useParams()
  const { isDesktop, isMobile } = useBreakpoints()
  const { openModal } = useModalContext()
  const { cartOperations, isInCart } = useCart()
  const { setAlert } = useSnackBarContext()
  const [sizeToggle, setSizeToggle] = useState(49)
  const navigate = useNavigate()

  const { addToCart } = cartOperations

  const onToggleChange = (_, value) => {
    setSizeToggle(value)
  }

  const getBikeById = useCallback(() => bikesService.getBikeById(id), [id])
  const responseError = useCallback(() => navigate(routesPath.error.notFound.path), [navigate])

  const { response: bike, loading: bikeLoading } = useAxios({
    service: getBikeById,
    onResponseError: responseError
  })

  if (bikeLoading && !bike) {
    return <AppLoader pageLoad size={ 70 } />
  }

  const onAddToCart = () => {
    const newCart = {
      _id: bike._id,
      category: bike.category,
      image: bike.previewImage,
      name: bike.name,
      size: sizeToggle,
      quantity: 1,
      price: bike.price
    }

    addToCart(newCart)

    setAlert({
      severity: snackbarVariants.success,
      message: 'bikeDetails.addedToCart'
    })
  }

  const openSizeGuideDialog = () => {
    openModal({ component: <SizeDialog /> })
  }

  const carouselImages = bike.images.map((image) => (
    <Box
      alt='bike image' component='img' key={ image }
      src={ image } sx={ styles.img }
    />
  ))

  const toggleBtn = bike.sizes.map((size) => (
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

      <AppButton
        disabled={ Boolean(isInCart(bike._id)) } fullWidth onClick={ onAddToCart }
        size='medium'
        variant='contained'
      >
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
      <DirectionLink
        before={ <ArrowBackIcon fontSize='small' /> }
        linkTo={ routesPath.catalog.route }
        sx={ { justifyContent: 'start' } }
        title={ t('bikeDetails.goToCatalog') }
      />
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
            value={ sizeToggle }
          >
            { toggleBtn }
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
