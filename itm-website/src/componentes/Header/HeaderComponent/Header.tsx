import './style.css'
import '../../../App.css'
import SearchBar from '../SearchBar/SearchBar'
import SignIn from '../Sign/SignIn';
import Cart from '../Cart/Cart';
import BurguerMenu from '../BurguerMenu/BurguerMenu';
import ItmTitle from '../ITM/ItmTitle';
import SocialIcons from '../socialIcons.tsx/SocialIcons';

export default function Header() {
  return (
      <div className='header display-row-evenly-y-center'>
        <div className='display-row-evenly-y-center itm-and-logos'>
          <BurguerMenu /> 
          <SocialIcons />
          <ItmTitle />
        </div>

        <SearchBar />
        
        <div className='display-row-evenly-y-center'>
          <SignIn />
          <Cart />
        </div>

      </div>
  )
}
