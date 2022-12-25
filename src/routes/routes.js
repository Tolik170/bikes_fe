import { Route, Routes } from 'react-router-dom'
import { routesPath } from './routesPath'
import Home from '../pages/home/Home'
import Catalog from '../pages/catalog/Catalog'
import CookiePolicy from '../pages/cookie-policy/CookiePolicy'

const AppRouter = () => {
  return (
    <Routes>
      <Route element={ <Home /> } path={ routesPath.home.route } />
      <Route element={ <Catalog /> } path={ routesPath.catalog.route } />
      <Route element={ <CookiePolicy /> } path={ routesPath.privacyPolicy.route } />
    </Routes>
  )
}

export default AppRouter
