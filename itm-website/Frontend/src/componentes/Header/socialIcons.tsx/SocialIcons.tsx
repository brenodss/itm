import './style.css'
import instagram from '../../../assets/instagram.svg'
import facebook from '../../../assets/facebook.svg'

function SocialIcons() {
  return (
    <div className='social-logos'>
        <img className='icon' src={instagram} />
        <img className='icon' src={facebook} />
    </div>
  )
}

export default SocialIcons