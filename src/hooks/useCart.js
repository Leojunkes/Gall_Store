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

  //remover Produtos
  const removeProd = (id) => {
    const prodRemove = cart.filter((product) => product.id !== id);
    setCart(prodRemove);
  };

  //atualizar produtos
  const updateProductAmount = (productId, amount) => {
    const updateCart = cart.map((cartItem) =>
      cartItem.id === productId
        ? {
            ...cartItem,
            amount,
          }
        : cartItem,
    );
    setCart(updateCart);
  };

  //Salvar Produto Localstorage
  const saveStorage = () => {
    localStorage.setItem('products', JSON.stringify([...cart]));
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, saveStorage, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const cart = useContext(CartContext);
  return cart;
}
