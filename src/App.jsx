import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Racing from './components/Pages/Racing';
import ElectricCar from './components/Pages/ElectricCar';
import Image from './Images/Image1.jpg';
import Image1 from './components/Image1';
import { Products } from './components/Products';
import { BuyContext } from './components/BuyContext';
import { BuyContextProvider } from './components/BuyContext';
import Home from './components/Home';
import Naam from './components/naam';
import Cart from './components/Cart';


function App() {


  return (
    <>
      <Navbar />
      <BuyContextProvider>

        <Routes>
          <Route
            index
            element={<Naam />} />


          <Route path = '/cart' element = {<Cart />}/>
          <Route path='/racing' element={<Racing />} />
          <Route path='/electriccar' element={<ElectricCar />} />

        </Routes>
      </BuyContextProvider>

    </>
  );
}

export default App
