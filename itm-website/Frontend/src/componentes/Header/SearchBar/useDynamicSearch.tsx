import { useEffect, useState } from 'react';
import requestProducts from './findProducts';

interface IProduct {
  imagem_grande: string;
  embalagem: string;
  token: string;
  peso_bruto: string;
  imagem_pequena: string;
  // ... outros campos
}

interface IError {
  erro: string;
}

const useDynamicSearchWithTimer = (productString: string) => {
  const [filteredResults, setFilteredResults] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState<number | null>(null);

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    setIsLoading(true);
    setTimer(
      window.setTimeout(async () => {
        const responseProducts: [] | IError = await requestProducts(productString);
        if (responseProducts && 'erro' in responseProducts) {
          setFilteredResults([]);
        }
        else {
          setFilteredResults(responseProducts);
        }        
        setIsLoading(false);
      }, 1000)
    );

    return () => { if (timer) clearTimeout(timer) };
  }, [productString]);

  return {
    filteredResults,
    isLoading,
  };
};

export default useDynamicSearchWithTimer;
