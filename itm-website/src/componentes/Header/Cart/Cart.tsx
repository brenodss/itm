import ShoppingCart from '../../../assets/cart.svg';
import './style.css'

function Cart() {
  return (
    <button>
        <img className='cart-img' src={ShoppingCart}/>
        <div className='cart-counter'>0</div>
    </button>
  )
}

export default Cart