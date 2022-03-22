import { createContext, useContext, useState, useEffect } from 'react';
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
  const [mensagens, setMensagens] = useState('');
  const [amount, setProductsAmount] = useState(1);
  const [quantity, setQuantity] = useState([]);
  const [total10, setTotal10] = useState('');

  useEffect(() => {
    const localStorageProdutos = JSON.parse(localStorage.getItem('products'));

    const localstorageTotal = JSON.parse(localStorage.getItem('saveTotal'));
    const totalSum =
      localStorage.getItem('saveTotal') !== null ? localstorageTotal : [];

    const cart1 = (localStorageProdutos || []).map((product) => ({
      ...product,
      amount: parseInt(product.amount),
      pricef: parseFloat(product.valor),
      priceT: parseFloat(product.valor) * parseInt(product.amount),
    }));

    setCart([...cart1]);
    setTotal10(totalSum);
  }, []);
  const total = cart.reduce((sumtotal, product) => {
    return (sumtotal += product.valor * product.amount);
  }, 0);

  //envio do pedido por Whats
  const whatsSend = () => {
    let fone = '5548999311384';

    var amountTotal = document.querySelectorAll('.amount1');
    var produtos = document.querySelectorAll('.produtos1');
    var content = '';
    for (var i = 0; i < produtos.length; i++) {
      content +=
        'PRODUTO : ' +
        produtos[i].value +
        '(' +
        'QUANTIDADE  :  ' +
        amountTotal[i].value +
        '  )' +
        ' | ';
    }
    var totalProducts = (document.getElementById('result').value = content);

    console.log(totalProducts);

    var totalValores = document.getElementById('totalValor').value;

    setProdutos(totalProducts);

    let url = `https://api.whatsapp.com/send/?phone=${fone}&text=
    *PEDIDO SITE GALL*%0A
    *Cliente:*%0A${name}%0A
    *Endereço de entrega:*%0A${endereco}%0A
    *Telefone*%0A${fones}%0A
    *Email*%0A${email}%0A
    *Mensagem*%0A${mensagens}%0A
    *PRODUTOS*%0A${totalProducts}%0A 
    *Total da Compra*%0A*${new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(totalValores)}*%0A
    
    
    &app_absent=0`;

    window.open(url);

    setProducts([...products]);
    console.log(cart);
    console.log(total10);
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
  const deleteCartItem = (id) => {
    if (confirm('Deseja realmente EXCLUIR essa tarefa?')) {
      const prodRemove = cart.filter((product) => product.id !== id);

      setCart(prodRemove);
      alert('excluído com sucesso');
      localStorage.setItem('products', JSON.stringify(cart));
    }
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
        setMensagens,
        setProductsAmount,
        setQuantity,
        setTotal10,
        total10,
        quantity,
        mensagens,
        produtos,
        fones,
        endereco,
        name,
        email,
        amount,
        addAlmofadas,
        addAlmofadas1,
        addAlmofadas2,
        addAlmofadas3,
        addcamisetas,
        saveStorage,
        deleteCartItem,
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
