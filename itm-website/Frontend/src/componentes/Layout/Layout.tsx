import { ReactNode, useEffect } from 'react';
import './style.css'
import Footer from "../Footer/Footer";
import Header from "../Header/HeaderComponent/Header";
import Whatsapp from "../WhatsApp/Whatsapp";
import BannerCard from '../MarketingCard/GameCard/BannerCard';

function Layout({ children }: { children: ReactNode }) {
  
  // const getSession = async () => {
  //   var myHeaders = new Headers();
  //   myHeaders.append("charset", "UTF-8");
  //   myHeaders.append("Content-Type", "application/json");
  //   myHeaders.append("login", "userapi");
  //   myHeaders.append("senha", "2f8265a");

  //   fetch("http://itm.objectdata.com.br/api/", {
  //     method: 'POST',
  //     headers: myHeaders,
  //     redirect: 'follow'
  //   })
  //     .then(response => response.text())
  //     .then(result => console.log(result))
  //     .catch(error => console.log('error', error));
  //     }

  //   useEffect(() => {
  //     getSession()
  //   }, [])

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
  