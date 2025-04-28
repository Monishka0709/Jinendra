import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Brand from './pages/Brand';
import Product from './pages/Product';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Checkout from './pages/Checkout';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <AuthProvider>
        <CartProvider>
        <Toaster />
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/brand/:brandName" element={<Brand />} />
        <Route path="/brand/:brandName/:productId" element={<Product />} />
      </Routes>
    </Router>
    </CartProvider>
      </AuthProvider>
  );
}

export default App;