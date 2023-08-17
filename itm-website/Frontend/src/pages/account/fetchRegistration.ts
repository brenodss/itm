import { IRegister } from "./interfaces";


const fetchRegistration = async (userInput: IRegister) => {
    
    const url = 'http://localhost:3000/register'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInput)
    }
    console.log(userInput);
    
    const registerUserResponse = await fetch(url, options)
    const json = await registerUserResponse.json()
    console.log(json);
    
}

export default fetchRegistration