import { useTranslation } from 'react-i18next'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import ImgTitleDescription from '~/components/img-title-description/ImgTitleDescription'

import frameIcon from '~/assets/images/techSpecification/frame.png'
import forkIcon from '~/assets/images/techSpecification/fork.png'
import brakeIcon from '~/assets/images/techSpecification/brake.png'
import wheelIcon from '~/assets/images/techSpecification/wheel.png'
import { styles } from '~/containers/bike-details/TechSpecification.styles'

const TechSpecification = ({ bike }) => {
  const { t } = useTranslation()
  const { techSpecification } = bike
  const { frame, fork, brakes, wheels } = techSpecification

  const cardItems = [
    {
      img: frameIcon,
      title: t('bikeDetails.techSpecifications.frame'),
      description: frame
    },
    {
      img: forkIcon,
      title: t('bikeDetails.techSpecifications.fork'),
      description: fork
    },
    {
      img: brakeIcon,
      title: t('bikeDetails.techSpecifications.brakes'),
      description: brakes
    },
    {
      img: wheelIcon,
      title: t('bikeDetails.techSpecifications.wheelsAndTires'),
      description: wheels
    }
  ]

  const generalInfoCards = cardItems.map((item) => (
    <Box key={ item.title } sx={ styles.card }>
      <ImgTitleDescription
        description={ item.description }
        img={ item.img }
        sx={ styles.iconTitleDescription }
        title={ item.title }
      />
    </Box>
  ))

  return (
    <Box sx={ styles.container }>
      <Typography sx={ styles.title }>
        { t('bikeDetails.techSpecifications.title') }
      </Typography>

      <Box sx={ styles.cardsContainer }>
        { generalInfoCards }
      </Box>
    </Box>
  )
}

export default TechSpecification
