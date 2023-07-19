import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './style.css'
import IProduct from './IProduct'
import getProductsByPage from './fetchProducts'

function Products() {
    const [products, setProducts] = useState<IProduct[]>()
    const navigate = useNavigate()

    const baseUrl = import.meta.env.VITE_BASE_URL

    const setFethedProducts = async () => {
       const fetch = await getProductsByPage(2)
       console.log(fetch);
       
       setProducts(fetch.products)
    }

    useEffect(() => {
        setFethedProducts()
    }, [])

    const handleGoToProduct = (id: number) => {
       navigate(`/product/${id}`)
    }

    return (
        <div className='product-grid'>
            {products && products?.map(({imagem_media, descricao, preco, codigo}, i) => {
                const reducedTitle = descricao.length > 55 ? descricao.slice(0, 55)+'...' : descricao
                return (
                    <div key={i} className='product-card bg-[white] rounded-md shadow-xl font-[Poppins]'>
                        <button onClick={() => handleGoToProduct(Number(codigo))} className='product-button'>
                            <img className='product-image' src={`${baseUrl}${imagem_media}`} />
                        </button>
                            <span className="product-title text-2xl text-[#42464d] font-semibold font-[Poppins]">{reducedTitle}</span>
                            <span className='product-price-without-discount font-[Poppins]'>R${Number(preco) + 100}</span>  
                            <span className='product-price font-[Poppins]'>R${preco}</span>  
                            <span className='product-price-installments font-[Poppins] font-bold'>{`12x R$ ${Number(preco/12).toFixed(2)} sem juros`}</span>  
                        <button className='add-cart text-2xl font-bold'>Comprar 🛒</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Products