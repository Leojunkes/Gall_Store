import { ChakraProvider } from '@chakra-ui/react';
import Footer from '../componentes/footer';
import Header from '../componentes/header/header';
import '../styles/globals.css';
import { theme } from '../styles/theme';
import 'bootstrap/dist/css/bootstrap.css';
import Footer1 from '../componentes/Footer1';
import Header1 from '../componentes/header/header1';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header/> 
      <Header1/>
      <Component {...pageProps} />
      <Footer/>
      <Footer1/>
    </ChakraProvider>
  );
}

export default MyApp;
