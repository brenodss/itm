import './style.css'
import ItmLogo from '../../../assets/itmmenor.png'
import { useNavigate } from 'react-router-dom'

function ItmTitle() {
  const navigate = useNavigate()
  return (
    <div className='itm-wrapper'>
      <button onClick={() => navigate('/')}>
        <img className='itm-logo' src={ItmLogo} />
      </button>
    </div>
  )
}

export default ItmTitle