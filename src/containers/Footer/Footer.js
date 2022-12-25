import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { routesPath } from '../../routes/routesPath'
import { styles } from './Footer.styles'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <Box sx={ styles.footer }>
      <Container sx={ styles.container }>
        <Typography color='primary.50' variant='caption'>
          { t('footer.allRightsReserved') }
        </Typography>
        <Box sx={ styles.links }>
          <Typography component={ Link } to={ routesPath.privacyPolicy.route } variant='caption'>
            { t('footer.privacyPolicy') }
          </Typography>
          <Typography component={ Link } to={ routesPath.privacyPolicy.route } variant='caption'>
            { t('footer.termOfUse') }
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
