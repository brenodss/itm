import { ReactNode } from 'react';
import './style.css'
import Footer from "../Footer/Footer";
import Header from "../Header/HeaderComponent/Header";
import Whatsapp from "../WhatsApp/Whatsapp";
import BannerCard from '../MarketingCard/GameCard/BannerCard';
import AdminHeader from '../AdminHeader/AdminHeader';

function Layout({ children, headerType, showBanner, screenHeigh }:
  { 
    children: ReactNode,
    headerType: 'normal' | 'admin',
    showBanner: boolean,
    screenHeigh: string
  }) {   
    
    return (
      <div className={`layout-component ${screenHeigh}`}>
        {headerType === 'normal' && <Header />}
        {headerType === 'admin' && <AdminHeader />}
        {showBanner && <BannerCard />}
        {children}
        <Whatsapp />
        <Footer />
      </div>
    );
  }

export default Layout
  