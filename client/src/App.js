import './App.css';
import Bid from './components/Bid';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Order from './components/Order';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/bid/:orderId' element={<Bid/>}/>
        {/* <Home/>
        {/* <Order/> */}
        {/* <Bid /> */} 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
