import Box from '@mui/material/Box'

import AppHeader from '~/containers/app-header/AppHeader'
import AppMain from '~/containers/app-main/AppMain'

import { styles } from '~/containers/app-content/AppContent.styles'

const AppContent = () => {
  return (
    <Box sx={ styles.root }>
      <AppHeader />
      <AppMain />
    </Box>
  )
}

export default AppContent
