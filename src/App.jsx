import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Brand from './pages/Brand';
import Product from './pages/Product';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand/:brandName" element={<Brand />} />
        <Route path="/brand/:brandName/:productId" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;