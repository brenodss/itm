import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './style.css'
import Product from './IProduct'

function Products() {
    const [products, setProducts] = useState<Product[]>()
    const navigate = useNavigate()

    useEffect(() => {
    const getProducts = async () => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setProducts(json))
    }
    getProducts()
    }, [])

    const handleGoToProduct = (id: number) => {
       navigate(`/product/${id}`)
    }

    return (
        <div className='product-grid'>
            {products && products?.map(({image, title, price, id}, i) => {
                const reducedTitle = title.length > 55 ? title.slice(0, 55)+'...' : title
                return (
                    <div key={i} className='product-card bg-[white] rounded-md shadow-xl font-[Poppins]'>
                        <button onClick={() => handleGoToProduct(id)} className='product-button'>
                            <img className='product-image' src={image} />
                        </button>
                            <span className="product-title text-2xl text-[#42464d] font-semibold font-[Poppins]">{reducedTitle}</span>
                            <span className='product-price-without-discount font-[Poppins]'>R${Number(price) + 100}</span>  
                            <span className='product-price font-[Poppins]'>R${price}</span>  
                            <span className='product-price-installments font-[Poppins] font-bold'>{`12x R$ ${Number(price/12).toFixed(2)} sem juros`}</span>  
                        <button className='add-cart text-2xl font-bold'>Comprar 🛒</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Products