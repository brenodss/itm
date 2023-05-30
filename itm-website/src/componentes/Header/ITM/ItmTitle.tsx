import './style.css'
import ItmLogo from '../../../assets/itmmenor.png'
import { useNavigate } from 'react-router-dom'

function ItmTitle() {
  const navigate = useNavigate()
  return (
    <div className='flex flex-row m-0 p-0'>
      <button onClick={() => navigate('/')}>
        <img className='max-w-none w-[18rem] h-[4rem]' src={ItmLogo} />
      </button>
    </div>
  )
}

export default ItmTitle