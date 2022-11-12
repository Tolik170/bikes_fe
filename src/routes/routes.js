import { Route, Routes } from 'react-router-dom'
import { routesPath } from './routesPath'
import Home from '../pages/home/Home'

const AppRouter = () => {
  return (
    <Routes>
      <Route element={ <Home /> } path={ routesPath.home.route } />
    </Routes>
  )
}

export default AppRouter
