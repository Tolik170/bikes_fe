import { Suspense } from 'react'

import AppLoader from '~/components/app-loader/AppLoader'
import AppRouter from '~/routes/routes'

const AppMain = () => {
  return (
    <Suspense fallback={ <AppLoader pageLoad size={ 70 } /> }>
      <AppRouter />
    </Suspense>
  )
}

export default AppMain
