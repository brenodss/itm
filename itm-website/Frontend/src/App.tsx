import './App.css'
import { Route, Routes } from 'react-router-dom';

import Products from './componentes/ProductCards/Products'
import ProductInfo from './pages/ProductInfo/ProductInfo';
import Layout from './componentes/Layout/Layout';
import Account from './pages/account/Account';
import AdminPage from './componentes/Admin/AdminPage';

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

      <Route path="/admin" element={
        <Layout>
          <AdminPage />
        </Layout>
      } />
    </Routes>
  )
}

export default App
