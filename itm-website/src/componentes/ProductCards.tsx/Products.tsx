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
                return (
                    <div key={i} className='product-card'>
                        <button onClick={() => handleGoToProduct(id)} className='product-button'>
                            <img className='product-image' src={image} />
                        </button>
                            <span className="product-title">{title}</span>
                            <span className='product-price-without-discount'>R${Number(price) + 100}</span>  
                            <span className='product-price'>R${price}</span>  
                            <span className='product-price-installments'>{`12x R$ ${Number(price/12).toFixed(2)} sem juros`}</span>  
                        <button className='add-cart'>Adicionar ao carrinho 🛒</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Products