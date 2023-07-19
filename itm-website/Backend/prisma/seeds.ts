import { PrismaClient } from '@prisma/client'
import fs from 'fs'

const prisma = new PrismaClient()

async function main() {
    fs.readFile('./prisma/produtos.json', 'utf8', async (err: any, data: any) => {
        if (err) {
          console.error(err);
          return;
        }
      
        const products = JSON.parse(data);

        try {
          await prisma.produto.createMany({data: products})
        } catch (error) {
          console.error('Erro ao analisar o arquivo JSON:', error);
        }
      });

}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    
  })