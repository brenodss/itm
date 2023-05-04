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
        <div className='menu'>
          <BurguerMenu /> 
        </div>
        <div className='title'>
          <ItmTitle />
        </div>
        <div className='searchbar'>
          <SearchBar />
        </div>
        <div className='signin'>
          <SignIn />
        </div>
        <div className='cart'>
          <Cart />
        </div>
      </div>
  )
}
