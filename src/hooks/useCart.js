import { createContext, useContext, useState } from 'react';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({})
  const addToCart = (p) => {
    setCart((old) => ({
      ...old,
      [p.id]: p
    }))
  }
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )

}

export function useCart() {
  const cart = useContext(CartContext)
  return cart
}
