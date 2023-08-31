import { NextFunction, Request, Response } from "express"

type TError = {
    message: string,
    code: number
}

type CustomErrorType = Error & { code: number };

export const CustomError = (message: string, code: number): CustomErrorType => {
    const error = new Error(message) as CustomErrorType
    error.code = code
    return error
}

type TErrorMiddleware = (
    error: TError,
    req: Request,
    res: Response,
    next: NextFunction
  ) => void;

const errorMiddleware: TErrorMiddleware = (error, req, res, next) => {
    const code = error.code
    const message = error.message
    console.log('---------------------------ERRO----------');
    
    if(code) {
        res.status(code).json({erro: message})
        return
    }

    res.status(500).json({erro: 'Erro desconhecido'})

}

export default errorMiddleware