import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { routesPath } from '../../routes/routesPath'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

import HashLink from '../../components/hash-link/HashLink'
import Logo from '../logo/Logo'
// import Sidebar from '~/containers/layout/sidebar/Sidebar'


import { styles } from './NavBar.styles'
import NavigationIcons from '../navigation-icons/NavigationIcons'

const Navbar = () => {
  const { t } = useTranslation()
  const [, setIsSidebarOpen] = useState(false)
  const navigationItems = Object.values(routesPath.navBar)


  const navigationList = navigationItems.map((item) => {
    return (
      <ListItem key={ item.label } sx={ styles.navItem }>
        <Typography
          component={ HashLink } sx={ styles.navItemText } to={ item.route }
          variant='subtitle2'
        >
          { t(`header.${item.label}`) }
        </Typography>
      </ListItem>
    )
  })

  return (
    <Box sx={ styles.header }>
      <Button
        component={ Link } size='small' sx={ styles.logoButton }
        to={ routesPath.home.route }
      >
        <Logo />
      </Button>

      <List sx={ styles.navList }>
        { navigationList }
      </List>

      <NavigationIcons setIsSidebarOpen={ setIsSidebarOpen } />

      { /* <Sidebar isSidebarOpen={ isSidebarOpen } navigationItems={ navigationItems } setIsSidebarOpen={ setIsSidebarOpen } /> */ }
    </Box>
  )
}

export default Navbar
