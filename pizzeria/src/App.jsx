import Navbar from './assets/Components/Navbar'
import Home from './assets/Components/Home'
import Footer from './assets/Components/Footer'
import Register from './assets/Components/Register'
import Login from './assets/Components/Login'
import Cart from './assets/Components/Cart'
import Pizza from './assets/Components/Pizza'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Cart /> */}
      <Pizza />
      <Footer />
    </div>
  )
}

export default App