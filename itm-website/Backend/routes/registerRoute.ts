import { Router } from 'express';
import { registerUserService } from '../services/registerService';
import RegisterUserValidation from '../validation/RegisterUserValidation';

const registerRoute = Router();

registerRoute.post('/', async (req: any, res) => {
  const body = req.body 
  
  const validated = RegisterUserValidation(body)  
  const registerUserServiceResponse = await registerUserService(validated)
  
  res.status(201).json(registerUserServiceResponse)
});

export default registerRoute;