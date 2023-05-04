import './style.css'
import { useNavigate } from 'react-router-dom'
import UserSign from '../../../assets/user-sign.svg'

function SignIn() {
  const navigate = useNavigate()

  const handleButton = () => {
    navigate('/account')
  }

  return (
    <div className='display-row-center'>
        <img src={UserSign} />
        <div>
          <button onClick={handleButton} className='account-input'>
              Entrar
          </button>
          <button onClick={handleButton} className='account-input'>
              Registrar
          </button>
        </div>
    </div>
  )
}

export default SignIn