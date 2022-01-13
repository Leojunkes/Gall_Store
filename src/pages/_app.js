import { ChakraProvider } from '@chakra-ui/react';
import Footer from '../componentes/footer/footer';
import Header from '../componentes/header/header';
import '../styles/globals.css';
// import { theme } from '../styles/theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer1 from '../componentes/footer/Footer1';
import Header1 from '../componentes/header/header1';
import { CartProvider } from '../hooks/useCart';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <ChakraProvider>
        <Header />
        <Header1 />
        <Component {...pageProps} />
        <Footer />
        <Footer1 />
      </ChakraProvider>
    </CartProvider>
  );
}

export default MyApp;
