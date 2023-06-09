import Button from '@mui/material/Button'

import AppLoader from '../app-loader/AppLoader'


const AppButton = ({
  children,
  loading,
  disabled,
  variant = 'contained',
  size = 'large',
  ...props
}) => {
  const loader = <AppLoader size={ 20 } sx={ { opacity: '0.6', color: 'basic.black' } } />

  return (
    <Button
      disabled={ loading || disabled } size={ size } variant={ variant }
      { ...props }
    >
      { loading ? loader : children }
    </Button>
  )
}

export default AppButton
