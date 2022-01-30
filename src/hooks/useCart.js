import { createContext, useContext, useState } from 'react';
import json from '../../data/ALMOF_DATA.json';
import json1 from '../../data/ALMOF1_DATA.json';
import json2 from '../../data/ALMOF2_DATA.json';
import json3 from '../../data/ALMOF3_DATA.json';
import jsonCami from '../../data/CAMIS_DATA.json';
import { createStandaloneToast } from '@chakra-ui/react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Adicionar produto ALMOFADAS
  const addAlmofadas = (id) => {
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
  //Adicionar produto ALMOFADAS1
  const addAlmofadas1 = (id) => {
    const productInTheCart = json1.almofadas1.find(
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
  //Adicionar produto ALMOFADAS2
  const addAlmofadas2 = (id) => {
    const productInTheCart = json2.almofadas2.find(
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
  //Adicionar produto ALMOFADAS3
  const addAlmofadas3 = (id) => {
    const productInTheCart = json3.almofadas3.find(
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
  //Adicionar produtos Camisetas
  const addcamisetas = (id) => {
    const productInTheCart = jsonCami.camisetas.find(
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
      value={{
        cart,
        addAlmofadas,
        addAlmofadas1,
        addAlmofadas2,
        addAlmofadas3,
        addcamisetas,
        saveStorage,

        updateProductAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const cart = useContext(CartContext);
  return cart;
}
