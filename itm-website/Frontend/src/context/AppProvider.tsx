import { useState, ReactNode } from 'react';
import AppContext from './appContext'

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const globalState = {
    products,
    setProducts,
    filteredProducts,
    setFilteredProducts
  };

  return <AppContext.Provider value={globalState}>
    {children}
  </AppContext.Provider>
}
export default Provider;
