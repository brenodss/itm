import axios, {AxiosError} from 'axios'

interface ISession {
  expiration_time?:string;
  code: number;
  session?: string;
  message: string;
  erro?: string;
}

const getSession = async () => {
  const baseUrl = process.env.BASE_URL
  
  try {


    var options = {
      method: 'POST',
      url: `${baseUrl}/`,
      headers: {
        Accept: '*/*',
        login: process.env.LOGIN,
        senha: process.env.PASSWORD
      }
    };
    
    const response = await axios.request(options)
    const data = response.data
     
     return {
      ...data,
      code: response.status
     }  as unknown as ISession

  } catch(error: any) {
    
    if(error.response instanceof AxiosError) {
      return {erro: error.response.data.message}
    }
    else {
      return {erro: `Erro desconhecido: ${error} `}
    }
  }
    
}

export default getSession