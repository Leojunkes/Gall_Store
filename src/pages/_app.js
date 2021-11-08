import { ChakraProvider } from '@chakra-ui/react';
import Footer from '../componentes/footer';
import Header from '../componentes/header';
import '../styles/globals.css';
import { theme } from '../styles/theme';
import 'bootstrap/dist/css/bootstrap.css';
import Footer1 from '../componentes/Footer1';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
      <Footer1/>
    </ChakraProvider>
  );
}

export default MyApp;
