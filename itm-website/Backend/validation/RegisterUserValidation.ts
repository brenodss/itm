import {z} from 'zod'
import IRegisterUser from '../interfaces/IRegisterUser';

const RegisterUserValidation = (userInput: IRegisterUser) => {
    const registerSchema = z.object({
        name: z.string({required_error: 'Nome é obrigatório'}).min(3, {
            message: 'Nome precisa ter no mínimo 3 caracteres'
        }),
        cpf: z.string({required_error: 'Cpf é obrigatório'}).length(11, {
            message: 'Cpf inválido'
        }),
        email: z.string({required_error: 'Email é obrigatório'}).
                email({message: 'Email inválido'}),
        address: z.string({required_error: 'Endereço é obrigatório'}).optional(),
        phone: z.string({required_error: 'Telefone é obrigatório',
                        invalid_type_error: 'Telefone precisa ser um número'}).
                        min(8, {message: 'Telefone precisa ter no mínimo 8 digitos'}),
        password: z.string().min(6, {message: 'A senha precisa ter no mínimo 6 digitos'})
    })
    return registerSchema.parse(userInput)    
}

export default RegisterUserValidation