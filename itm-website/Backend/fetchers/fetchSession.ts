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

    const options = {
      method: 'POST',
      url: baseUrl,
      headers: {
        Accept: '*/*',
        login: process.env.LOGIN as string,
        senha: process.env.PASSWORD as string
      }
    };
     const response = await axios.request(options)     
     const data = response.data
     
     return {
      ...data,
      code: response.status
     }  as unknown as ISession

  } catch(error: any) {
    console.log(error.statusCode);

    if(error instanceof AxiosError) {
      return {erro: error.message}
    }
    else {
      return {erro: `Erro desconhecido: ${error} `}
    }
  }
    
}

export default getSession