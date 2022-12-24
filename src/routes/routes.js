import { Route, Routes } from 'react-router-dom'
import { routesPath } from './routesPath'
import Home from '../pages/home/Home'
import Catalog from '../pages/catalog/Catalog'

const AppRouter = () => {
  return (
    <Routes>
      <Route element={ <Home /> } path={ routesPath.home.route } />
      <Route element={ <Catalog /> } path={ routesPath.catalog.route } />
    </Routes>
  )
}

export default AppRouter
