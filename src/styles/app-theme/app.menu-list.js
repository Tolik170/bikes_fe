import { mainShadow } from './custom-shadows'

export const menuList = {
  styleOverrides: {
    root: {
      '& .MuiPaper-root': {
        boxShadow: mainShadow
      },
      '& .MuiMenu-list': {
        padding: 0
      }
    }
  }
}
