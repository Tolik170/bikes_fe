import Box from '@mui/material/Box'
import TitleWithDescription from '~/components/title-with-description/TitleWithDescription'

import { styles } from '~/components/img-title-description/ImgTitleDescription.styles'

const ImgTitleDescription = ({
  img,
  title,
  description,
  sx = styles
}) => {
  return (
    <Box sx={ sx.container }>
      <Box
        alt='info' component='img' src={ img }
        sx={ sx.img }
      />

      <TitleWithDescription
        description={ description }
        sx={ sx.titleWithDescription }
        title={ title }
      />
    </Box>
  )
}

export default ImgTitleDescription
