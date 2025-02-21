import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About'
import Service from './component/Service'; 
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import Remedies from './component/Remedies';
import Login from './component/Login';
import Account from './component/Account';
import Signup from './component/Signup';
import Bmi from './component/Bmi';
import Meditation from './component/Meditation';
import HomeRemedies from './component/HomeRemedies';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/remedies' element={<Remedies />} />
          <Route path='/login' element={<Login />} />
          <Route path='/account' element={<Account />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/bmi' element={<Bmi />} />
          <Route path='/Meditation' element={<Meditation />} />
          <Route path='/HomeRemedies' element={<HomeRemedies />} />
          <Route path='/service' element={<Service />} />
          
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;