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
  const [products, setProducts] = useState([]);
  const [endereco, setEnderecoEntrega] = useState('');
  const [produtos, setProdutos] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [fones, setFones] = useState('');

  //envio do pedido por Whats
  const whatsSend = () => {
    let fone = '5548999311384';
    length = localStorage.length;
    console.log(length);
    const produtos = document.querySelectorAll('input[type=text]').value;

    let url = `https://api.whatsapp.com/send/?phone=${fone}&text=
    *PEDIDO SITE GALL*%0A
    *Cliente:*%0A${name}%0A
    *Endereço de entrega:*%0A${endereco}%0A
    *Telefone*%0A${fones}%0A
    *email*%0A${email}%0A
    *Produtos*%0A${produtos}%0A

    &app_absent=0`;
    window.open(url);

    setProducts([...products]);
    //localStorage.setItem('productsWhatsSend', JSON.stringify(products));
    console.log(products);
  };
  //Fim do envio por whats

  

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
        setCart,
        setEmail,
        setName,
        setEnderecoEntrega,
        setFones,
        setProdutos,
        produtos,
        fones,
        endereco,
        name,
        email,
        addAlmofadas,
        addAlmofadas1,
        addAlmofadas2,
        addAlmofadas3,
        addcamisetas,
        saveStorage,

        whatsSend,
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
