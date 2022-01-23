import { createContext, useContext, useState } from 'react';
import json from '../../data/ALMOF_DATA.json';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Adicionar produto
  const addProduct = (id) => {
    const addprod = json.almofadas.find(
      (product) => product.id === id,
      //? { ...product, quantity: product.amount + 1 }
      //: product;
    );
    if (addprod) {
      return json.almofadas.map((item) => {
        if (item.id === id) {
          return { 
            ...item, amount:item.amount + 1
          };
        }
        return item;
      });
    }
    //const itemId = DATA_ALMOFADAS.map((item) => {
    //  item.id === id ? { ...item, quantity: item.amount + 1 } : item;
    //});
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
    localStorage.setItem('products', JSON.stringify(cart));
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
