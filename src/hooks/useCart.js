import { createContext, useContext, useState } from 'react';
import json from '../../data/ALMOF_DATA.json';
import { createStandaloneToast } from '@chakra-ui/react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Adicionar produto
  const addItems = (id) => {
    const productInTheCart = json.almofadas.find(
      (product) => product.id === id,
    );

    const toast = createStandaloneToast();
    toast({
      title: 'Adicionado ao carrinho',
      position: 'top',
      status: 'success',

      duration: 4000,
      isClosable: true,
    });
    console.log(productInTheCart);

    setCart((old) => [...old, productInTheCart]);
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
