import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import './style.css'

function ProductInfo() {
	const params = useParams()
	const [productInfo, setProductInfo] = useState()

	useEffect(() => {
		const getCurrentProduct = async () => {
			const url = `https://fakestoreapi.com/products/${params.i}`
			const request = await fetch(url)
			const json = await request.json()
			setProductInfo(json)
		}
		getCurrentProduct()
	}, [])

  return (	
    <div className='product-info-wrapper'>
		{productInfo && 
		<div className='product-info-card'>
			<img className='product-info-image' src={productInfo["image"]}></img>
			<div className='buy-product-card'>
				<p className='prod-info-title'>{productInfo["title"]}</p>
				<p className='product-info-price'>R${productInfo["price"]}</p>
				<span className='tag'>Frete grátis</span>
				<span className='tag'>Entrega rápida</span>
				<span className='tag'>Pagamento em até 12x</span>
				<button className='buy-button'>COMPRAR COM DESCONTO 💳</button>
			</div>
		</div>
		}
	</div>
  )
}

export default ProductInfo