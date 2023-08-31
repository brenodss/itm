import './App.css'
import { Route, Routes } from 'react-router-dom';

import Products from './componentes/ProductCards/Products'
import ProductInfo from './pages/productInfo/ProductInfo';
import Layout from './componentes/Layout/Layout';
import Account from './pages/account/Account';
import AdminPage from './componentes/Admin/AdminPage';
import RegisterCheckout from './pages/account/RegisterCheckout';

function App() {

  return (
    <Routes>
      <Route path="/" element={
        <Layout headerType='normal' showBanner={true} screenHeigh='h-[100vh]'>
          <Products />
        </Layout>
      } />

      <Route path="/account" element={
        <Layout headerType='normal' showBanner={false} screenHeigh='h-[120vh]'>
          <Account />
        </Layout>
      } />

      <Route path="/register" element={
        <Layout headerType='normal' showBanner={false} screenHeigh='h-[120vh]'>
          <RegisterCheckout />
        </Layout>
      } />

      <Route path="/product">
        <Route path=":i" element={
        <Layout headerType='normal' showBanner={true} screenHeigh='h-[100vh]'>
          <ProductInfo />
        </Layout>} />
      </Route>

      <Route path="/admin" element={
        <Layout headerType='admin' showBanner={false} screenHeigh='h-[150vh]'>
          <AdminPage />
        </Layout>
      } />
    </Routes>
  )
}

export default App
