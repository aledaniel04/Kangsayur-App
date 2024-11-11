import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import Start from './pages/Start'
import { Product } from './pages/Product'
import { ShoppingCart } from './pages/ShoppingCart'
import { CartProvider } from './context/CartContext'
import { Toaster } from 'react-hot-toast'




function App() {


  return (
    <>
      <CartProvider>
      <Toaster/>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/start' element={<Start />} />
            <Route path='/products' element={<Product />} />
            <Route path='/ShoppingCart' element={<ShoppingCart />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  )
}

export default App
