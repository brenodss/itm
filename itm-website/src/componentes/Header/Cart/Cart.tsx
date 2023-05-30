import ShoppingCart from '../../../assets/cart.svg';
import './style.css'

function Cart() {
  return (
    <button>
        <img className='w-[5rem] h-[5rem]' src={ShoppingCart}/>
        {/* <div className='cart-counter'>0</div> */}
        <div className=' text-fuchsia-50 bg-[#ff5510] text-xl
        relative -top-7 -left-[23px] rounded-full
        min-[1049px]:w-[18px]
        max-[1050px]:w-[60px]'>0</div>
    </button>
  )
}

export default Cart