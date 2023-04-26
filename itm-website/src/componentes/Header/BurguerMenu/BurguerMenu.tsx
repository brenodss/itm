import './Style.css'
import MenuIcon from '../../../assets/burgerMenu.svg'

function BurguerMenu() {
  return (
    <div className='burguer-button'>
        <button>
            <img className='burger-menu' src={MenuIcon}/>
        </button>
    </div>
  )
}

export default BurguerMenu