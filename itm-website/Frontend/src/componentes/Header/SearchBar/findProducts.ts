const requestProducts = async (query: string) => {
    try {
      if(!query) return
      
      const response = await fetch(`http://localhost:3000/produtos/find/?produto=${query}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      });
      const json = await response.json()
      
      return json
    } catch (error) {
      console.log(error);
      
      return []
    }
  };

export default requestProducts