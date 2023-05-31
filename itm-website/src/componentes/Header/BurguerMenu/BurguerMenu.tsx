import './style.css'
import MenuIcon from '../../../assets/burgerMenu.svg'
import { useState } from 'react'
import BurguerOpen from '../BurguerOpen/BurguerOpen'

function BurguerMenu() {
  const [burguerOpen, setBurguerOpen] = useState(false)
  return (
        <button className='burguer-button'>
            <img onClick={() => setBurguerOpen(true)} className='burger-menu' src={MenuIcon}/>
            {burguerOpen && <BurguerOpen setBurger={setBurguerOpen} />}
        </button>
  )
}

export default BurguerMenu