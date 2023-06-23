import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import About from './pages/About';
import Cart from './pages/Cart';
import Single from './pages/Single';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './pages/NotFound';

function App() {
  return (
    
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/blogs' element={<Blog/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about-us' element={<About/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/product/:id' element={<Single/>}></Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      
      <Footer/>
      <ToastContainer />
    </BrowserRouter>
   
  );
}

export default App;
