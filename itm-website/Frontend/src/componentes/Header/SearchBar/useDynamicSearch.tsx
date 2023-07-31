import { useEffect, useContext, useState } from 'react';
import AppContext from '../../../context/appContext';
import requestProducts from './findProducts';

const useDynamicSearchWithTimer = (productString: string) => {
  const [filteredResults, setFilteredResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState<number | null>(null);

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    setIsLoading(true);
    setTimer(
      window.setTimeout(async () => {
        const responseProducts = await requestProducts(productString)
        setFilteredResults(responseProducts);
        setIsLoading(false);
      }, 1000)
    );

  }, [productString]);

  return {
    filteredResults,
    isLoading,
  };
};

export default useDynamicSearchWithTimer;