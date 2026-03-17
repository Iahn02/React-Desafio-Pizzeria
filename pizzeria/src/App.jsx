import { Routes, Route, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'
import Navbar from './assets/Components/Navbar'
import Home from './pages/Home'
import Footer from './assets/Components/Footer'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  const { token } = useContext(UserContext)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={token ? <Navigate to="/" /> : <Register />} />
        <Route path="/login" element={token ? <Navigate to="/" /> : <Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App