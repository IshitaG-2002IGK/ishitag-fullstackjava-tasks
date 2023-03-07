import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Home from './Home';

function App() {
  return (
    <div className="App">
{/* 
    <Routes>
        <Route  path='/' element={<Home></Home>}></Route>;
        <Route  path='/About' element={<AboutUs></AboutUs>}></Route>;
        <Route  path='/Contact' element={<ContactUs></ContactUs>}></Route>;
    </Routes> */}

    <nav>
      <ul>
          <Link to="/"><b>Home</b></Link><br></br><hr></hr>
          <Link to="/about"><b>About Us</b></Link><br></br><hr></hr>
          <Link to="/contact"><b>Contact Us</b></Link><br></br><hr></hr>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </nav>

    </div>
  );
}

export default App;
