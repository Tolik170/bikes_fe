import Typography from '@mui/material/Typography'

import useBreakpoints from '~/hooks/use-breakpoints'
import HashLink from '~/components/hash-link/HashLink'

import { styles } from '~/components/direction-link/DirectionLink.styles'

const DirectionLink = ({
  linkTo,
  title,
  before,
  after,
  sx
}) => {
  const { isMobile } = useBreakpoints()
  return (
    <Typography
      component={ linkTo ? HashLink : 'span' }
      sx={ [styles.showAllOffers, sx] }
      to={ linkTo }
      variant={ isMobile ? 'caption' : 'button' }
    >
      { before }
      { title }
      { after }
    </Typography>
  )
}

export default DirectionLink
