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
    <div className='flex flex-row justify-center items-center'>
		{productInfo && 
		<div className='product-info-card'>
			<img className='product-info-image' src={productInfo["image"]}></img>

			<div className='border border-gray-300 w-8/12 min-w-[55%] h-full bg-opacity-75 bg-gray-900 ml-10 box-border rounded-md flex flex-col justify-around'>

				<p className='text-4xl text-gray-100 pl-5'>{productInfo["title"]}</p>

				<div className='stars pl-2'>
					<RatingStars rating={4.3} />
					<p className='pl-3 text-2xl text-slate-200'>Vendidos: 428</p>
				</div>
				
				
				<div className="product-prices pl-5">
					<div className='flex flex-row items-center text-center'>
						<p className='mr-12 text-2xl text-slate-300'>De: </p>
						<p className='text-4xl text-slate-300 line-through'>R${productInfo["price"] + 30}</p>
					</div>

					<div className='flex flex-row'>
						<p className='mt-3 mr-10 text-2xl text-slate-300'>Por: </p>
						<p className='text-green-400 text-5xl'>R${productInfo["price"]}</p>
					</div>
					<p className='text-2xl text-slate-200'>à vista com 10% de desconto no boleto ou pix</p>
				</div>

				<div className='flex flex-col'>
					<span className='tag tag1'>🚚 Frete grátis</span>
					<span className='tag tag2'>💨 Entrega rápida</span>
					<span className='tag tag3'>🤑 Pagamento em até 12x</span>
				</div>

				<p className='mt-10 ml-5 text-4xl text-green-300'>📅12 meses de garantia</p>
				<button className='bg-green-500 text-white font-bold text-4xl rounded-md h-20 w-full relative -bottom-11 flex items-center justify-center'>COMPRAR COM DESCONTO 💳</button>
			</div>
		</div>
		}
	</div>
  )
}

export default ProductInfo