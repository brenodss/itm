import { Response, NextFunction } from 'express';
import validateSession from '../session/valideteSession';

const sessionMiddleware = async (req: any, _res: Response, next: NextFunction) => {
    const session = await validateSession()
    
    req.session = session
    // console.log(req);
        
    next()
}

export default sessionMiddleware