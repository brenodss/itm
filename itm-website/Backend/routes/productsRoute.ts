import { Router } from 'express';
import {getProducts, getProductsByString} from '../services/getProducts';
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()
const router = Router();

router.get('/', async (req: any, res) => {
  const page = req.query.page || 1
  const products = await getProducts(page, 60)
  
  res.status(200).json(products)
});

router.post('/', async (req: any, res) => {
  const body = req.body
  
  try {
    await prisma.produto.create({data: {...body}})
    res.status(201).json({message: 'ok'})
  } catch(error) {
    res.json(error)
  }
});

router.get('/qtd', async (req: any, res) => {
  try {
    const quantidade = await prisma.produto.count()
    console.log(quantidade);
    res.json(quantidade)
  } catch(error) {
    res.send(error)
  }
});

router.get('/find', async (req: any, res) => {
  const productString = req.query.product
  const filteredProducts = await getProductsByString(productString)
  
  res.status(200).json(filteredProducts)
});

router.delete('/del', async (req, res) => {
  try {
    const quantidade = await prisma.produto.deleteMany()
    res.json(quantidade)
  } catch(error) {
    res.send(error)
  }
})

export default router;