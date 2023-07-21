import { ReactNode, useEffect } from 'react';
import './style.css'
import Footer from "../Footer/Footer";
import Header from "../Header/HeaderComponent/Header";
import Whatsapp from "../WhatsApp/Whatsapp";
import BannerCard from '../MarketingCard/GameCard/BannerCard';
import {useLocation} from 'react-router-dom'

function Layout({ children }: { children: ReactNode }) {   
  const location = useLocation()
  const isAdminPage = location.pathname === '/admin'
  
    return (
      <div className='layout-component'>
        <Header />
        {!isAdminPage && <BannerCard />}
        {children}
        <Whatsapp />
        <Footer />
      </div>
    );
  }

export default Layout
  