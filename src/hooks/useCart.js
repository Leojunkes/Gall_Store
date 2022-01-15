import { createContext, useContext, useState } from 'react';
import DATA_ALMOFADAS from '/mockProdutos/ALMOF_DATA';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  //Adicionar produto
  const addProduct = (id) => {
    const addprod = DATA_ALMOFADAS.find((p) => p.id === id);

    const newProdutos = {
      ...addprod,
    };

    setCart((old) => [...old, newProdutos]);
  };

  //Salvar Produto Localstorage
  const saveStorage = () => {
    localStorage.setItem('products', JSON.stringify([...cart]));
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, saveStorage }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const cart = useContext(CartContext);
  return cart;
}
