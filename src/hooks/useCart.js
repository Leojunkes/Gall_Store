import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //Adicionar produto
  const addProduct = (id) => {
    const addprod = cart.find((p) => p.id === id);

    const newProdutos = {
      ...addprod,
    };

    setCart((old) => [...old, newProdutos]);
  };

  //increment product

  //Salvar Produto Localstorage
  const saveStorage = () => {
    localStorage.setItem('produtos', JSON.stringify([...cart]));
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
