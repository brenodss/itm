import axios, {AxiosError} from 'axios'

const getProducts = async (page: string = '0', session: string, query: string) => {
  const baseUrl = process.env.BASE_URL
  console.log(page);
  
  try {
    
    const options = {
      method: 'GET',
      url: `${baseUrl}/produto/?produto=${query}&estoque_maior_zero=true&page=${page}`,
      
      headers: {
        Accept: '*/*',
        session
      }
    };
     const response: any = await axios.request(options)  
     
     const data = Object.values([...response.data])
     
     return data

  } catch(error: any) {

    if(error instanceof AxiosError) {
      return {erro: error.message}
    }
    else {
      return {erro: `Erro desconhecido: ${error} `}
    }
  }
    
}

export default getProducts