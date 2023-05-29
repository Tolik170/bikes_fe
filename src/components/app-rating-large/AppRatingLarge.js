import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import AppRating from '~/components/app-rating/AppRating'
import { styles } from '~/components/app-rating-large/AppRatingLarge.styles'

const AppRatingLarge = ({ value, reviewsCount, ...ratingProps }) => {
  const { t } = useTranslation()

  return (
    <Box sx={ styles.root }>
      <Box sx={ styles.number }>
        <Typography variant={ 'h5' }>
          { value }
        </Typography>
      </Box>
      <AppRating value={ value } { ...ratingProps } />
      <Typography variant={ 'body1' }>
        { t('common.reviews.reviewsCount', { count: reviewsCount }) }
      </Typography>
    </Box>
  )
}

export default AppRatingLarge
