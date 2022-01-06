import { createContext, useContext, useState } from 'react';
export const CartContext = createContext();
import DATA_ALMOFADAS from '/mockProdutos/ALMOF_DATA';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([''])
  const name = 'Leonardo'


  return (
    <CartContext.Provider value={{opa:'eu'}}>
      {children}
    </CartContext.Provider>
  )

}

export function useCart() {
  const cart = useContext(CartContext)
  return cart
}
