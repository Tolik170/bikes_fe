import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Link from '@mui/material/Link'

import { routesPath } from '~/routes/routesPath'
import Logo from '~/containers/logo/Logo'
import NavigationIcons from '~/containers/navigation-icons/NavigationIcons'
import { styles } from '~/containers/navbar/NavBar.styles'

const Navbar = () => {
  const { t } = useTranslation()
  const [, setIsSidebarOpen] = useState(false)
  const navigationItems = Object.values(routesPath.navBar)

  const navigationList = navigationItems.map((item) => {
    return (
      <ListItem key={ item.label } sx={ styles.navItem }>
        <Link href={ item.route } sx={ styles.navItemText } >
          { t(`header.${item.label}`) }
        </Link>
      </ListItem>
    )
  })

  return (
    <Box sx={ styles.header }>
      <Button
        component={ RouterLink } size='small' sx={ styles.logoButton }
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
