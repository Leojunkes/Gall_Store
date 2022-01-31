import { createContext, useContext, useState } from 'react';

import { createStandaloneToast } from '@chakra-ui/react';

export const ClientContext = createContext();

export const ClientProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [newName, setName] = useState('');
  const [newFone, setFone] = useState('');
  const [newCpf, setCpf] = useState('');
  const [newAddress, setAddress] = useState('');

  //Adicionar Cliente
  const handleCreateUsers = (e) => {
    e.preventDefault();
    const newUsers = {
      id: Math.random(),
      name: newName,
      fone: newFone,
      cpf: newCpf,
      address: newAddress,
    };

    if (!newUsers) return;

    const toast = createStandaloneToast();
    toast({
      title: 'Salvo com Sucesso!',
      position: 'top',
      status: 'success',

      duration: 4000,
      isClosable: true,
    });
    console.log(newUsers);

    setUsers((old) => [...old, newUsers]);
  };

  //Salvar Produto Localstorage
  const saveStorage = () => {
    localStorage.setItem('users', JSON.stringify(users));
  };

  return (
    <ClientContext.Provider
      value={{
        users,
        setUsers,
        newName,
        setName,
        newFone,
        setFone,
        newCpf,
        setCpf,
        handleCreateUsers,
        saveStorage,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export function useClient() {
  const users = useContext(ClientContext);
  return users;
}
