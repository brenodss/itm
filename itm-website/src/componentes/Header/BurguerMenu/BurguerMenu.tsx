import './style.css'
import MenuIcon from '../../../assets/burgerMenu.svg'

function BurguerMenu() {
  return (
        <button className='burguer-button'>
            <img className='burger-menu' src={MenuIcon}/>
        </button>
  )
}

export default BurguerMenu