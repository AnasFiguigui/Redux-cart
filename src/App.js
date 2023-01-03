import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { BrowserRouter , Route, Routes } from "react-router-dom"
import Casques from './components/items/Casques';
import Souris from './components/items/Souris';
import Clavier from './components/items/Clavier';
import Checkout from  './components/Checkout'


const App = () => {

  return (
    <>


        <BrowserRouter>

        <Header />
          <Routes>
               <Route exact path="/" element={<Home />}/>
               <Route exact path="/Casques" element={<Casques/>}/>
               <Route exact path="/Souris" element={<Souris/>}/>
               <Route exact path="/Clavier" element={<Clavier/>}/>
               <Route path="/Checkout" element={<Checkout/>}/>
          </Routes>
        <Footer />
        <Cart/>
        </BrowserRouter>



    </>
  );
};

export default App;

