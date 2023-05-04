import { Box, Typography } from '@mui/material'
import { styles } from './TitleWithDescription.styles'

const TitleWithDescription = ({
  title,
  description,
  sx = styles
}) => {
  return (
    <Box sx={ sx.container }>
      <Typography sx={ sx.title }>
        { title }
      </Typography>
      <Typography sx={ sx.description }>
        { description }
      </Typography>
    </Box>
  )
}

export default TitleWithDescription
