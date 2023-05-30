import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

import sizeChart from '~/assets/images/sizeChart.jpg'
import { styles } from '~/containers/size-dialog/SizeDialog.styles'

const SizeDialog = () => {
  const { t } = useTranslation()

  return (
    <Box sx={ styles.container }>
      <Box sx={ styles.textContainer }>
        <Typography sx={ styles.text }>
          { t('bikeDetails.sizeGuideModalTitle') }
        </Typography>
        <Link href={ 'https://bestbikeadvice.com/gb/en/bikefit' } sx={ styles.text } target='_blank'>
          {  t('bikeDetails.sizeGuideModalLink') }
        </Link>
      </Box>
      <Box component='img' src={ sizeChart } sx={ styles.img } />
    </Box>
  )
}

export default SizeDialog
