import './style.css'
import whatsapp from '../../assets/whatsapp.svg'

function Whatsapp() {
  return (
    <div>
        <button className='whatsapp-button'>
            <img src={whatsapp} />
        </button>
    </div>
  )
}

export default Whatsapp