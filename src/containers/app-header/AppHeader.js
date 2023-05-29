import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Navbar from '../navbar/NavBar'

import { styles } from '~/containers/app-header/AppHeader.styles'

const AppHeader = () => {
  return (
    <>
      <AppBar color='common' sx={ styles.appBar }>
        <Navbar />
      </AppBar>
      <Toolbar sx={ styles.toolbar } />
    </>
  )
}

export default AppHeader
