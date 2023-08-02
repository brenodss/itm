import { Router } from 'express';
import {getProducts, getProductsByString} from '../services/productsService';

const router = Router();

router.get('/', async (req: any, res) => {
  const page = req.query.page || 1
  const products = await getProducts(page, 60)
  
  res.status(200).json(products)
});

router.get('/find', async (req: any, res) => {
  const productString = req.query.product
  const filteredProducts = await getProductsByString(productString)
  
  res.status(200).json(filteredProducts)
});

export default router;