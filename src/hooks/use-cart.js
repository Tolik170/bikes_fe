import { useCallback } from 'react'

import { useCartContext } from '~/context/cart-context'

export const useCart = () => {
  const { cartItems, setCartItems } = useCartContext()

  const addToCart = (item) => {
    setCartItems((prevCart) => [item, ...(prevCart ?? [])])
  }

  const clearCart = () => {
    setCartItems([])
  }

  const removeFromCart = (item) => {
    const newCartItems = cartItems.filter((cartItem) => cartItem._id !== item._id)
    newCartItems.length ? setCartItems(newCartItems) : clearCart()
  }

  const isInCart = (id) => cartItems.find((cartItem) => cartItem._id === id)

  const changeQuantity = useCallback(
    (id, count) => {
      setCartItems((prevCart) =>
        prevCart.map((el) => {
          if (el._id === id) el.quantity = count
          return el
        })
      )
    },
    [setCartItems]
  )

  const getTotalPrice = () => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  const cartOperations = {
    addToCart,
    removeFromCart,
    changeQuantity,
    getTotalPrice,
    clearCart
  }

  return {
    isInCart,
    cartItems,
    cartOperations
  }
}
