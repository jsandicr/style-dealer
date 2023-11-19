import { ReactNode, useEffect }from 'react'
import { Route, Routes, useLocation, Navigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import { Navbar } from "./components/Navbar.tsx"
import { CheckoutPage } from "./pages/CheckoutPage.tsx";
import { ErrorPage } from "./pages/ErrorPage.tsx";
import { MainPage } from "./pages/MainPage.tsx"
import { ProductInfoPage } from "./pages/ProductInfoPage.tsx";
import { Products } from "./pages/Products.tsx";
import { FavPage } from "./pages/FavPage.tsx";
import { StoresPage } from "./pages/StoresPage.tsx";
import { Footer } from "./components/Footer.tsx";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

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
        <Route path="/checkout" element={
        <ProtectedRoute >
          <CheckoutPage />
        </ProtectedRoute>} />
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