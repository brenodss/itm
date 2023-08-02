import { useState, ReactNode } from 'react';
import AdminContext from './adminContext'

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

  return <AdminContext.Provider value={globalState}>
    {children}
  </AdminContext.Provider>
}

export default Provider;
