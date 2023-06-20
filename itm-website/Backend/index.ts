import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.get('/teste', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json({'ok': 'testando123'});
});

app.post('/', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json({'ok': 'ok'});
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});