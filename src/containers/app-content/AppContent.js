import Box from '@mui/material/Box'
import AppHeader from '../app-header/AppHeader'
import AppMain from '../app-main/AppMain'
// import ScrollToTopButton from '~/components/scroll-to-top-button/ScrollToTopButton'
// import Footer from '~/containers/layout/footer/Footer'
import ScrollToTop from '../../components/scroll-to-top/ScrollToTop'

const styles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    '.MuiToolbar-root + div': {
      flexGrow: 1,
      mt: {
        md: '16px',
        sm: '8px',
        xs: '0px'
      }
    }
  }
}

const AppContent = () => {
  return (
    <Box sx={ styles.content }>
      <AppHeader />
      <ScrollToTop />
      <AppMain />
      { /* <ScrollToTopButton />
      <Footer /> */ }
    </Box>
  )
}

export default AppContent
