import close from '../../../assets/close.svg'
import user from '../../../assets/user-sign.svg'
import './style.css'

interface IBurgerOpen {
    setBurger: (state: boolean) => void
}

function BurguerOpen({setBurger}: IBurgerOpen) {
  return (
    <div className="transition-1 w-[440px] bg-[#181a1b] h-full fixed left-0 top-0 z-10 text-2xl flex flex-col items-start text-[white] pl-10 font-[Poppins] cursor-auto">
        <div className='flex flex-row items-center'>
            <img src={user} className='w-[55px] h-[55px]' />
            <h2 className='font-[Poppins]'>Faça seu login ou registre-se</h2>
        </div>

        <button onClick={() => setBurger(false)} className="absolute right-0">
            <img src={close}/>
        </button>

        <nav className='mt-5 flex flex-col items-start w-full'>
          <a href={'conta'}>Minha conta</a>
          <hr />
          <a href={'pedidos'}>Meus pedidos</a>
          <hr /> 
          <a href={'favoritos'}>Favoritos</a>
          <hr />
          <a href={'suporte'}>Suporte e RMA</a>
          <hr />
          <a href={'feedback'}>Feedback</a>
        </nav>
    </div>
  )
}

export default BurguerOpen