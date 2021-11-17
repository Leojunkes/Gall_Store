/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import {
  Flex,
  Button,
  Image,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import { BsHandbag } from 'react-icons/bs';

import Link from 'next/link';

export default function Header() {
  return (
    <div className="header">
      <Flex h="8rem" fontWeight="400" bg="gray.100">
        <Flex m="10px auto">
          <Image
            borderRadius="100px"
            w="14rem"
            h="10rem"
            src="/imagens/logoGall1.png"
          />
        </Flex>
        <Flex mr="20px">
          <BsHandbag
            style={{ marginTop: '20px', marginRight: '10px' }}
            fontSize="2.2rem"
          />
          <Text fontSize="0.9rem" mt="33px" ml="-31px">
            0
          </Text>
        </Flex>
      </Flex>

      <Flex
        paddingBottom="26px"
        mt="-35px"
        bg="gray.100"
        justifyContent="center"
        boxShadow="15.5218px 10.9578px 0px rgba(0, 0, 0, 0.11), 10.0604px 7.10225px 0px rgba(0, 0, 0, 0.0835185), 5.97878px 4.22077px 0px rgba(0, 0, 0, 0.0668148), 3.10437px 2.19155px 0px rgba(0, 0, 0, 0.055), 1.26474px 0.892855px 0px rgba(0, 0, 0, 0.0431852), 0.287441px 0.202922px 0px rgba(0, 0, 0, 0.0264815);"
      >
        <Flex mt="65px">
          {/* <Text>Início</Text>
          <Text ml="6px">Produtos</Text>
          <Text ml="6px">Sobre Nós</Text>
          <Text ml="6px">Contato</Text> */}
          <Tabs  color="gray.800" variant="line" colorScheme="green">
            <TabList>
              <Link href="/">
                <Tab fontSize="1.3rem" _focus="none">
                  Início
                </Tab>
              </Link>
              <Link href="/produtos">
                <Tab fontSize="1.3rem" _focus="none">
                  Produtos
                </Tab>
              </Link>

              <Link href="/sobrenos">
                <Tab fontSize="1.3rem" _focus="none">
                  Sobre Nós
                </Tab>
              </Link>

              <Tab fontSize="1.3rem" _focus="none">
                Contato
              </Tab>
            </TabList>
          </Tabs>
        </Flex>
      </Flex>
    </div>
  );
}
