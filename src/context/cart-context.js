import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react'

import { getFromLocalStorage, setToLocalStorage } from '~/services/local-storage.service'

import { cartKey } from '~/constants/constants'


const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getFromLocalStorage(cartKey) || [])

  const clearCartHandler = useCallback(() => {
    if (cartItems.length) {
      setCartItems([])
    }
  }, [cartItems])

  useEffect(() => {
    setToLocalStorage(cartKey, cartItems)
  }, [cartItems])

  useLayoutEffect(() => {
    window.addEventListener('storage', clearCartHandler)
    return () => {
      window.removeEventListener('storage', clearCartHandler)
    }
  }, [clearCartHandler])

  return (
    <CartContext.Provider
      value={ { cartItems, setCartItems } }
    >
      { children }
    </CartContext.Provider>
  )
}

const useCartContext = () => useContext(CartContext)

export { CartContextProvider, useCartContext }
