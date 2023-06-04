import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import Details from './pages/shop/Details';
function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Cart />}/>
          <Route path='/product/:id' element={<Details />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
