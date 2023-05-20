import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'

import TitleWithDescription from '../title-with-description/TitleWithDescription'

import { styles } from './CardWithLink.styles'

const CardWithLink = ({
  img,
  title,
  description,
  link,
  sx = {}
}) => {
  return (
    <Box
      component={ link ? Link : Box }
      sx={ { ...styles.container(Boolean(link)), ...sx.container } }
      to={ link }
    >
      <Box
        alt='item image' component='img' src={ img }
        sx={ { ...styles.img, ...sx.img } }
      />
      <TitleWithDescription
        description={ description }
        sx={ { ...styles.titleWithDescription, ...sx.titleWithDescription } }
        title={ title }
      />
    </Box>
  )
}

export default CardWithLink
