import axios, {AxiosError} from 'axios'

const getOrders = async (session: string, start: string, end: string) => {
  const baseUrl = process.env.BASE_URL

  try {

    const options = {
      method: 'GET',
      url: `${baseUrl}/pedido/?
              data_conclusao_inicio=${start}&
              data_conclusao_fim=${end}`,
      headers: {
        Accept: '*/*',
        session
      }
    };
     const response = await axios.request(options)     
     const data = response.data
     
     return {
      ...data,
      code: response.status
     }

  } catch(error: any) {

    if(error instanceof AxiosError) {
      return {erro: error.message}
    }
    else {
      return {erro: `Erro desconhecido: ${error} `}
    }
  }
    
}

export default getOrders