import { ReactNode, useEffect } from 'react';
import './style.css'
import Footer from "../Footer/Footer";
import Header from "../Header/HeaderComponent/Header";
import Whatsapp from "../WhatsApp/Whatsapp";
import BannerCard from '../MarketingCard/GameCard/BannerCard';

function Layout({ children }: { children: ReactNode }) {   
    return (
      <div className='layout-component'>
        <Header />
        <BannerCard />
        {children}
        <Whatsapp />
        <Footer />
      </div>
    );
  }

export default Layout
  