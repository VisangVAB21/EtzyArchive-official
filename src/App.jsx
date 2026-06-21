import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'

// Pages
import Login from './pages/Login'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import ProductDetail from './pages/ProductDetail'
import About from './pages/About'
import PurchaseGuide from './pages/PurchaseGuide'
import PaymentGuide from './pages/PaymentGuide'
import ShippingCost from './pages/ShippingCost'
import CartCheckout from './pages/CartCheckout'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CartDrawer />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/purchase-guide" element={<PurchaseGuide />} />
          <Route path="/payment-guide" element={<PaymentGuide />} />
          <Route path="/shipping" element={<ShippingCost />} />
          <Route path="/cart" element={<CartCheckout />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App