import './style.css'
import { useNavigate } from 'react-router-dom'

function SignIn() {
  const navigate = useNavigate()

  const handleButton = () => {
    navigate('/account')
  }

  return (
    <div>
        <button onClick={handleButton} className='account-input'>
            Entrar
        </button>
        <button onClick={handleButton} className='account-input'>
            Registrar
        </button>
    </div>
  )
}

export default SignIn