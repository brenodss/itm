import './App.css'
import { Route, Routes } from 'react-router-dom';

import Footer from './componentes/Footer/Footer'
import Header from './componentes/Header/HeaderComponent/Header'
import GameCard from './componentes/MarketingCard/GameCard/BannerCard'
import Products from './componentes/ProductCards.tsx/Products'
import Whatsapp from './componentes/WhatsApp/Whatsapp'
import Home from './pages/home/Home';
import ProductInfo from './pages/ProductInfo/ProductInfo';
import Layout from './componentes/Layout/Layout';
import Account from './pages/account/Account';

function App() {

  return (
    <Routes>
      <Route path="/" element={
        <Layout>
          <Products />
        </Layout>
      } />

      <Route path="/account" element={
        <Layout>
          <Account />
        </Layout>
      } />

      <Route path="/product">
        <Route path=":i" element={
        <Layout>
          <ProductInfo />
        </Layout>} />
      </Route>
    </Routes>
  )
}

export default App
