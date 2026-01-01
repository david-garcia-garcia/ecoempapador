import { Routes, Route } from 'react-router-dom';
import config from './config';
import { getProductById } from './data/products';
import Header from './components/Header';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header siteName={config.name} />
      <main className="main-content" style={{ padding: 0 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/product/:id"
            element={
              <ProductDetail
                getProductById={getProductById}
                buyButtonText={config.buyButtonText}
              />
            }
          />
          <Route
            path="/checkout/:id"
            element={<Checkout getProductById={getProductById} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
