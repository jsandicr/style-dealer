import { Navbar } from "./components/Navbar.tsx"
import { CheckoutPage } from "./pages/CheckoutPage.tsx";
import { ErrorPage } from "./pages/ErrorPage.tsx";
import { MainPage } from "./pages/MainPage.tsx"
import { Route, Routes, useLocation } from 'react-router-dom'
import { ProductInfoPage } from "./pages/ProductInfoPage.tsx";
import { Products } from "./pages/Products.tsx";
import { FavPage } from "./pages/FavPage.tsx";
import { StoresPage } from "./pages/StoresPage.tsx";
import { Footer } from "./components/Footer.tsx";
import { useEffect } from "react";

function App() {
  const location  = useLocation()
  useEffect(()=>{
    scrollTo({
      top: 0
    })
  }, [location])
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/fav" element={<FavPage />} />
        <Route path="/products/:category/:subcategory?"  element={<Products />} />
        <Route path="/products/info/:id"  element={<ProductInfoPage />} />
        <Route path="/stores"  element={<StoresPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>   
  )
}

export default App;