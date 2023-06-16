import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Box from '@mui/material/Box'

import AppButton from '~/components/app-button/AppButton'
import TitleWithDescription from '~/components/title-with-description/TitleWithDescription'

import { routesPath } from '~/routes/routesPath'
import plantImg from '~/assets/images/error-page/404-plant.svg'
import manImg from '~/assets/images/error-page/404-man.svg'
import { styles } from '~/pages/error/not-found/NotFound.styles'

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <Box sx={ styles.root }>
      <Box sx={ styles.box }>
        <TitleWithDescription
          description={ t('errorPage.404.description') }
          sx={ styles.titleWithDescription }
          title={ t('errorPage.404.title') }
        />
        <AppButton
          component={ Link }
          size='medium'
          sx={ styles.button }
          to={ routesPath.home.route }
        >
          { t('errorPage.goToHome') }
        </AppButton>
      </Box>

      <Box sx={ styles.imgBox }>
        <Box
          alt='man with bag'
          component='img'
          src={ manImg }
          sx={ styles.manImg }
        />
        <Box
          alt='flowerpot'
          component='img'
          src={ plantImg }
          sx={ styles.plantImg }
        />
      </Box>
    </Box>
  )
}

export default NotFound
