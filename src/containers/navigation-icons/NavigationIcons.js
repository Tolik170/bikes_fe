import { useCallback } from 'react'

import GuestIcons from './guest-icons/GuestIcons'
//import { ModalContext } from '~/context/modal-context'
//import LoginDialog from '~/containers/guest-home-page/login-dialog/LoginDialog'

const NavigationIcons = ({ setIsSidebarOpen }) => {
  //const { openModal } = useContext(ModalContext)

  //   const openLoginDialog = useCallback(() => {
  //     openModal({ component: <LoginDialog /> })
  //   }, [openModal])

  const openLoginDialog = useCallback(() => {
    console.log('open login dialog')
  }, [])

  //   if (userRole === student) return <StudentIcons setIsSidebarOpen={ setIsSidebarOpen } />

  return <GuestIcons openLoginDialog={ openLoginDialog } setIsSidebarOpen={ setIsSidebarOpen } />
}

export default NavigationIcons
