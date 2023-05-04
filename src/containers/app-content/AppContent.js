import Box from '@mui/material/Box'
import AppHeader from '../app-header/AppHeader'
import AppMain from '../app-main/AppMain'
import Footer from '../Footer/Footer'
import ScrollToTop from '../../components/scroll-to-top/ScrollToTop'

const styles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    '.MuiToolbar-root + div': {
      flexGrow: 1
    }
  }
}

const AppContent = () => {
  return (
    <Box sx={ styles.content }>
      <AppHeader />
      <ScrollToTop />
      <AppMain />
      { /* <ScrollToTopButton /> */ }
      <Footer /> 
    </Box>
  )
}

export default AppContent
