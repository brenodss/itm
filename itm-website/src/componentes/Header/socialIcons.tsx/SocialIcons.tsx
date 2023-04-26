import './style.css'
import instagram from '../../../assets/instagram.svg'
import facebook from '../../../assets/facebook.svg'

function SocialIcons() {
  return (
    <div className='social-logos'>
        <img src={instagram} />
        <img src={facebook} />
    </div>
  )
}

export default SocialIcons