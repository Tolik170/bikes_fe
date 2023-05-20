import { useTranslation } from 'react-i18next'

import Box from '@mui/material/Box'

import AppButton from '~/components/app-button/AppButton'
import ImgTitleDescription from '~/components/img-title-description/ImgTitleDescription'

import searchIcon from '~/assets/images/search_icon.svg'
import { styles } from '~/components/not-found-results/NotFoundResults.styles'

const NotFoundResults = ({
  description,
  buttonText,
  onClick
}) => {
  const { t } = useTranslation()

  return (
    <Box sx={ styles.container }>
      <ImgTitleDescription
        description={ description }
        img={ searchIcon }
        style={ styles.imgTitleDescription }
        title={ t('common.resultsNotFound') }
      />
      { buttonText && (
        <AppButton
          onClick={ onClick }
          sx={ styles.button }
          variant={ 'tonal' }
        >
          { buttonText }
        </AppButton>
      ) }
    </Box>
  )
}

export default NotFoundResults
