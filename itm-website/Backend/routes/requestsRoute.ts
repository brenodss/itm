import { Router } from 'express';
import { getRequestsByDate } from '../services/requestsService';

const router = Router();

router.get('/', async (req: any, res) => {
  
  const session = req.session  
  const pedidos = await getRequestsByDate(session)
  
  res.status(200).json(pedidos)
});

export default router;