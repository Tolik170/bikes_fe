import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

import { styles } from './AppLoader.styles'

const AppLoader = ({ size, sx, pageLoad = false }) => {
  return (
    <Box sx={ styles.container(pageLoad) }>
      <CircularProgress size={ size } sx={ { ...sx, ...styles.loader } } />
    </Box>
  )
}
export default AppLoader
