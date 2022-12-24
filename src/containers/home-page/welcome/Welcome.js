import { useTranslation } from 'react-i18next'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import HashLink from '../../../components/hash-link/HashLink'

import { styles } from './Welcome.styles'
import { routesPath } from '../../../routes/routesPath'

const Welcome = () => {
  const { t } = useTranslation()

  return (
    <Box className='section' sx={ styles.container }>
      <Typography sx={ styles.title }>
        { t('homePage.welcomeBlock.title') }
      </Typography>
      <Box sx={ styles.buttonsContainer }>
        <Button
          component={ HashLink } sx={ styles.getStartBtn } to={ routesPath.catalog.route } 
          variant='light'
        >
          { t('homePage.welcomeBlock.getStarted') }
        </Button>

        <Button
          component={ HashLink } sx={ styles.learnMoreBtn } to={ routesPath.catalog.route } 
          variant='contained'
        >
          { t('homePage.welcomeBlock.learnMore') }
        </Button>
      </Box>
    </Box>
  )
}

export default Welcome
