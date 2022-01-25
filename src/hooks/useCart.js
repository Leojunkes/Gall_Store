import axios from 'axios';
import { createContext, useContext, useState } from 'react';
import json from '../../data/ALMOF_DATA.json';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const productAlm = 'http://localhost:3001/produtos/${id}';

  //Adicionar produto
  const addItems = (id) => {
    const productInTheCart = json.almofadas.find((product) => product.id === id);
    console.log(productInTheCart);

    //setCart([...cart, { amount:10}]);

    setCart((old) => [...old, productInTheCart]);
  };

  //Adicionar produto
  //const addProduct = async (id) => {
  //  const addprod = json.almofadas.find((product) => product.id === id);
  //  const updateItem = cart.map((item) =>
  //    item.id === id
  //      ? {
  //          ...item,
  //          amount: Number(item.amount + 1),
  //        }
  //      : item,
  //  );
  //  const newProdutos = {
  //    updateItem,
  //  };
  //  setCart((old) => [...old, newProdutos]);
  //};

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
      value={{ cart, addItems, saveStorage, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const cart = useContext(CartContext);
  return cart;
}
