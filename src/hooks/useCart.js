import axios from 'axios';
import { createContext, useContext, useState } from 'react';
import json from '../../data/ALMOF_DATA.json';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const productAlm = 'http://localhost:3001/produtos/${id}';

  //Adicionar produto
  const addProduct = async (id) => {
    const addprod = json.almofadas.find((product) => product.id === id);
    if (!addprod) {
      await axios.get(`productAlm`);
    }

    const addProducts = json.almofadas.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          amount: item.amount + 1,
        };
      }
      return item;
    });

    const newProdutos = {
      ...addprod,
      addProducts,
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
