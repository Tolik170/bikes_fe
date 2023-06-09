import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import { routesPath } from '~/routes/routesPath'
import Home from '~/pages/home/Home'
const Catalog = lazy(() => import('~/pages/catalog/Catalog'))
const CookiePolicy = lazy(() => import('~/pages/cookie-policy/CookiePolicy'))
const Checkout = lazy(() => import('~/pages/checkout/Checkout'))
const BikesDetails = lazy(() => import('~/pages/bike-details/BikeDetails'))

const AppRouter = () => {
  return (
    <Routes>
      <Route element={ <Home /> } path={ routesPath.home.route } />
      <Route element={ <Catalog /> } path={ routesPath.catalog.route } />
      <Route element={ <BikesDetails /> } path={ routesPath.bikeDetails.route } />
      <Route element={ <CookiePolicy /> } path={ routesPath.privacyPolicy.route } />
      <Route element={ <Checkout /> } path={ routesPath.checkout.route } />
    </Routes>
  )
}

export default AppRouter
