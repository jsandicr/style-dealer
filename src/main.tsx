import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from '../ThemeProvider';
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import { ResizeProvider } from "./context/resize.tsx";
import { CartProvider } from "./context/cart.tsx"
import { FavProvider } from "./context/fav.tsx";
import { BrowserRouter} from 'react-router-dom'

const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <BrowserRouter>
        <CartProvider>
          <FavProvider>
            <ResizeProvider>
              <App />
            </ResizeProvider>
          </FavProvider>
        </CartProvider>
      </BrowserRouter>
    </Auth0Provider>
  </ThemeProvider>,
)
