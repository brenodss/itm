
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function getProducts(page: number, limit: number) {
    const prisma = new PrismaClient();

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

export default getProducts