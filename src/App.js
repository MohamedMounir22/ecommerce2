import './App.css';
import { BrowserRouter as Router, Routes, Route , HashRouter} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Footer from './components/footer';
import LatestProducts from './components/LatestProducts';
import AboutUsSection from './pages/aboutUsSection';
import ContactUs from './pages/ContactUs';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CheckoutPage from './pages/CheckoutPage';
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <HashRouter>
      <Toaster position="top-center" />
      <Header />
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<LatestProducts/>} />
          <Route path="/about" element={<AboutUsSection/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<CheckoutPage/>} />
          




          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;
