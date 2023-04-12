import './App.css'; 
import { Route,Routes,Navigate } from "react-router-dom";

// Components
import Store from './Store';
import ProductDetails from './ProductDetails';
import Navbar from './Navbar'
import ShopCart from './Component/ShopCart';
// Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar/>
        <Routes>
          <Route path="/products/:id" element={<ProductDetails /> } />
          <Route path="/products" element={<Store /> } />
          <Route path= "/cart"element={<ShopCart /> } />
          <Route path="/*"  element={<Navigate to="/products" /> } />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
