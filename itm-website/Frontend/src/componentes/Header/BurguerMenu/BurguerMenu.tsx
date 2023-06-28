import './style.css'
import MenuIcon from '../../../assets/burgerMenu.svg'
import { useState } from 'react'
import BurguerOpen from '../BurguerOpen/BurguerOpen'

function BurguerMenu() {
  const [burguerOpen, setBurguerOpen] = useState(false)
  return (
    <div>
        <button className='burguer-button'>
            <img onClick={() => setBurguerOpen(true)} className='burger-menu' src={MenuIcon}/>
        </button>

        {burguerOpen && <BurguerOpen setBurger={setBurguerOpen} />}
    </div>
  )
}

export default BurguerMenu