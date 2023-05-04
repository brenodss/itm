import './style.css'
import { useNavigate } from 'react-router-dom'
import UserSign from '../../../assets/user-sign.svg'
import DropDown from '../../../assets/dropdown.svg'

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
        <button onClick={handleButton} className='dropdown-login'>
            <img src={DropDown}></img>
        </button>
    </div>
  )
}

export default SignIn