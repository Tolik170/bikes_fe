import { Suspense, useRef } from 'react'
import Box from '@mui/material/Box'

import AppLoader from '~/components/app-loader/AppLoader'
import Footer from '~/containers/Footer/Footer'
import ScrollToTop from '~/components/scroll-to-top/ScrollToTop'
import ScrollToTopButton from '~/components/scroll-to-top-button/ScrollToTopButton'
import AppRouter from '~/routes/routes'

import { styles } from '~/containers/app-main/AppMain.styles'

const AppMain = () => {
  const mainWithFooter = useRef(null)

  return (
    <Suspense fallback={ <AppLoader pageLoad size={ 70 } /> }>
      <Box ref={ mainWithFooter } sx={ styles.content }>
        <ScrollToTop />
        <AppRouter />
        <ScrollToTopButton element={ mainWithFooter } />
        <Footer /> 
      </Box>
    </Suspense>
  )
}

export default AppMain
