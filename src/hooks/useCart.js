import { createContext, useContext, useState } from 'react';
export const CartContext = createContext();
import DATA_ALMOFADAS from '/mockProdutos/ALMOF_DATA';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([''])
  // const addToCart = produto => {
  //   setCart(old => ({
  //     ...old,
  //     [produto.id]: produto
  //   }))
  // }
  function addToCart(id) {
    const produtos = DATA_ALMOFADAS.find((p) => p.id === id);

    setCart(produtos);
    localStorage.setItem('produtos', JSON.stringify([produtos]));

    console.log(cart);
    
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
