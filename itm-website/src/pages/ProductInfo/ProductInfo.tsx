import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import './style.css'
import RatingStars from '../../componentes/RatingStars/RatingStars'

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
			<div className='buy-product-card-grid'>
				<p className='prod-info-title title'>{productInfo["title"]}</p>
				<div className='stars'>
					<RatingStars rating={5} />
				</div>
				<div className="product-prices">
					<p className='from'>De:</p>
					<p className='previous-price'>R${productInfo["price"]}</p>
					<br />
					<p className=''>Por: </p>
					<p className='product-info-price'>R${productInfo["price"]}</p>
				</div>

				<span className='tag tag1'>Frete grátis</span>
				<span className='tag tag2'>Entrega rápida</span>
				<span className='tag tag3'>Pagamento em até 12x</span>
				<button className='buy-button'>COMPRAR COM DESCONTO 💳</button>
			</div>
		</div>
		}
	</div>
  )
}

export default ProductInfo