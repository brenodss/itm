
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

async function getProducts(page: number, limit: number) {

    const products = await prisma.produto.findMany({
        where: {
            quantidade_disponivel: {gt: 0},
            imagem_media: {not: null }
        },
        skip: (page - 1) * limit,
        take: limit,
    });
    
    return {
        products,
        totalPages: Math.ceil(products.length / limit),
    };
}

async function getProductsByString(productString: string) {

    try {
        const filteredProductsByString = await prisma.produto.findMany({
          where: {
            descricao: {
              contains: productString
            },
            quantidade_disponivel: {gt: 0},
            imagem_pequena: {not: null}
          },
          take: 30
        })
        
        return filteredProductsByString
      } catch(error) {
        return 'Erro'
      }
}

export {
    getProducts,
    getProductsByString
}