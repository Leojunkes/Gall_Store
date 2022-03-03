import { Flex, Input, Text, Box, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useClient } from '../hooks/checkoutHook';

const ClientForm = () => {
  const {
    handleCreateUsers,
    users,
    setUsers,
    newName,
    setName,
    newFone,
    setFone,
    newCpf,
    setCpf,
  } = useClient();

  //  useEffect(() => {
  //    const localStorageTasks = JSON.parse(localStorage.getItem('users'));
  //    const detailUsers =
  //      localStorage.getItem('users1') !== null ? localStorageTasks : [];
  //    console.log(detailUsers);

  //    setUsers([...detailUsers]);
  //  }, []);

  return (
    <>
      <Flex w='60%' as="form" flexDirection="column" onSubmit={handleCreateUsers}>
        <Text>Preencha o formulário abaixo:</Text>
        <Box>
          <Text>Nome</Text>
          <Input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={newName}
          />
        </Box>

        <Box>
          <Text>CPF</Text>
          <Input
            id="cpf"
            type="number"
            onChange={(e) => setCpf(e.target.value)}
            value={newCpf}
          />
        </Box>

        <Box>
          <Text>Telefone</Text>
          <Input
            id="cpf"
            type="number"
            onChange={(e) => setFone(e.target.value)}
            value={newFone}
          />
        </Box>
        <Button border="none" colorScheme="green" type="submit">
          Cadastrar
        </Button>
      </Flex>
    </>
  );
};
export default ClientForm;
