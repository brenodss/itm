import { NextFunction, Request, Response } from "express"

type TError = {
    message: string,
    code: number
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

    res.status(code).json({erro: message})
}

export default errorMiddleware