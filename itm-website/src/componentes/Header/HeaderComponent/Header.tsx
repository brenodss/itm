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
      <div className='header'>
        <div className='display-row-evenly-y-around'>
          <div className='display-row-evenly-y-around itm-and-logos'>
            <BurguerMenu /> 
            {/* <SocialIcons /> */}
            <ItmTitle />
          </div>

          <SearchBar />
          
          <div className='display-row-evenly-y'>
            <SignIn />
            <Cart />
          </div>
        </div>

      </div>
  )
}
