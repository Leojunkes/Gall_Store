import { Box, Flex, Input } from '@chakra-ui/react';

const Login = () => {
  return (
    <Flex>
      <Flex as="form">
        <Input placeholder="" type="text" />
        <Input type="password" />
      </Flex>
      <div class="g-signin2" data-onsuccess="onSignIn">login</div>
    </Flex>
  );
};
export default Login;
