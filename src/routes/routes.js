import { Route, Routes } from 'react-router-dom'
import { routes } from './routesPath'
import Home from '../pages/home/Home'

const AppRouter = () => {
  return (
    <Routes>
      <Route element={ <Home /> } path={ routes.home.path } />
    </Routes>
  )
}

export default AppRouter
