import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Shop from './Components/Pages/Shop';
import ShopCategray from './Components/Pages/ShopCategray';
import AboutUs from './Components/Pages/AboutUs';
import Product from './Components/Pages/Product';
import Cart from './Components/Pages/Cart';
import LoginSignup from './Components/Pages/LoginSignup';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route  path='/' element={<Shop/>} />
      <Route  path='/mens' element={<ShopCategray category="men"/>} />
      <Route  path='/womens' element={<ShopCategray  category="women"/>} />
      <Route  path='/kids' element={<ShopCategray  category="kid"/>}/>
      <Route  path='/product' element={<Product/>}/>
      <Route  path=':productId' element={<Product/>}>
      </Route> 
      <Route  path='/about' element={<AboutUs/>}/>
      <Route  path='/card' element={<Cart/>}/>
      <Route  path='/login' element={<LoginSignup/>}/>
    </Routes>
    
    </BrowserRouter>
  
    </>
  );
}

export default App;
