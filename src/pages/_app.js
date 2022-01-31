import { ChakraProvider } from '@chakra-ui/react';
import Footer from '../componentes/footer/footer';
import Header from '../componentes/header/header';
import '../styles/globals.css';
import { theme } from '../styles/theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer1 from '../componentes/footer/Footer1';
import Header1 from '../componentes/header/header1';
import { CartProvider } from '../hooks/useCart';
import { ClientProvider } from '../hooks/checkoutHook';

function MyApp({ Component, pageProps }) {
  return (
    <ClientProvider>
      <CartProvider>
        <ChakraProvider theme={theme}>
          <Header />
          <Header1 />

          <Component {...pageProps} />

          <Footer />
          <Footer1 />
        </ChakraProvider>
      </CartProvider>
    </ClientProvider>
  );
}

export default MyApp;
