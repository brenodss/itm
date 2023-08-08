import { Response, NextFunction } from 'express';
import validateSession from '../session/valideteSession';

const sessionMiddleware = async (req: any, _res: Response, next: NextFunction) => {
    const session = await validateSession()
    console.log(session);
    
    req.session = session
    next()
}

export default sessionMiddleware