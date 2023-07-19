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
    let headers = {
      "Accept": "*/*",
      "charset": "charset: UTF-8",
      "login": process.env.LOGIN as string,
      "senha": process.env.PASSWORD as string,
      "Content-Type": "application/json"
     }
     
     var response = await axios.post(`${baseUrl}/api/`, {}, { headers });
     const data = response.data
     
     return {
      ...data,
      code: response.status
     }  as unknown as ISession

  } catch(error) {
    if(error instanceof AxiosError) {
      return {erro: error.message}
    }
    else {
      return {erro: `Erro desconhecido: ${error} `}
    }
  }
    
}

export default getSession