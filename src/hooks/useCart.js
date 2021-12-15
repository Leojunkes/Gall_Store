import { createContext, ReactNode, useContext, use } from 'react';
const CartContext = createContext();

export function CartProvider() {
  const [cart, setCart] = useState('');
}
