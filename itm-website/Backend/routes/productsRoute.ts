import { Router } from 'express';
import {getOneProductInfoService, getProductsByQueryService, getProductsService} from '../services/productsService';

const router = Router();

router.get('/find', async (req: any, res) => {
  const page = req.query.page || 0
  const session = req.session
  const query = req.query.produto
  const limit = req.query.limit || 30

  const products = await getProductsByQueryService(page, limit, session, query)
  
  res.status(200).json(products)
});

router.get('/', async (req: any, res) => {
  const session = req.session
  const page = req.query.page || 0
  
  const filteredProducts = await getProductsService(page, session)
  
  res.status(200).json(filteredProducts)
});

router.get('/:id', async (req: any, res) => {
  try {
    const codigo = req.params.id
    const session = req.session
    
    const oneProductInfo = await getOneProductInfoService(codigo, session)
    
    res.status(200).json(oneProductInfo.data)
  } catch(error) {
    // console.log(error);
    
    res.status(500).send(error)
  }
});

export default router;