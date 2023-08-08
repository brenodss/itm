import fetchProductsByQuery from "../fetchers/fetchProductsByQuery";
import fetchProducts from "../fetchers/fetchProducts";
import IProducts from '../interfaces/IProduct'

async function getProductsByQueryService(page: string, limit: number, session: string, query: string) {
    const products = await fetchProductsByQuery(page, session, query);
    return products;
}

async function getProductsService(page: string, session: string) {
    const pageEnd = Number(page) + 4
    let productsPromises: any = [];
    let productsResponse: IProducts[] = []
    
    for (let i = Number(page); (i <= pageEnd); i += 1) {
        const fetchOnePage = fetchProducts(i.toString(), session);
        productsPromises.push(fetchOnePage);
    }

    try {
        const fetchedProducts = await Promise.all(productsPromises);
        productsResponse = [].concat(...fetchedProducts.map(product => product.data));
        
        return productsResponse
    } catch (error) {
        console.error("Erro:", error);
        throw new Error("Ocorreu um erro ao buscar os produtos.");
    }
}

export {
    getProductsByQueryService,
    getProductsService
}
