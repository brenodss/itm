import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const prisma = new PrismaClient()

async function seedProducts() {
  try {
    fs.readFile('./prisma/produtos.json', 'utf8', async (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
    
      const products = JSON.parse(data);
  
      try {
        // products.forEach(async (product, i) => {
        //   console.log(await prisma.produto.create({data: {...product}}));
        // })
        console.log(await prisma.produto.createMany({data: products}))
      } catch (error) {
        console.error('Erro ao analisar o arquivo JSON:', error);
      }
    });
  } catch(error) {
    throw error
  }
}

async function seedSession() {
  prisma.session.upsert({
    create: {
        session: '1231232312',
        expiration_time: '10/04/2023 11:00:00',
    }
  })
  // await prisma.session.create({data: })
}

async function main() {
  try {
    await prisma.$connect()
    console.log('CONNECTED');
    await seedProducts()
    await seedSession()
  } catch(er) {
    console.log(er);
  }

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    await prisma.$disconnect()
    throw e
  })