import './style.css'
// import GameImage from '../../../assets/goldenchest2.jpg'
// import ProfessionalImage from '../../../assets/professional2.jpg'
import terabyte from '../../../assets/terabyte-teste.webp'

function BannerCard() {
  return (
    <div className='banner-wrapper'>
        <img className='dungeon-img' src={terabyte}></img>
    </div>
  )
}

export default BannerCard