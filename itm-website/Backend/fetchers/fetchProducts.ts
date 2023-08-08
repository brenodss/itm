import axios, {AxiosError} from 'axios'

const getProducts = (page: string, session: string) => {
  const baseUrl = process.env.BASE_URL

  try {

    const options = {
      method: 'GET',
      url: `${baseUrl}/produto/?page=${page}`,
      
      headers: {
        Accept: '*/*',
        session
      }
    };
     const response: any = axios.request(options)     
     
     return response

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