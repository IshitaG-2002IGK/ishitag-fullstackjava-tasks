import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

function App() {
  return (
    <div>

    <Routes>
        <Route  path='/' element={<Home></Home>}></Route>;
        <Route  path='/AboutUs' element={<AboutUs></AboutUs>}></Route>;
        <Route  path='/ContactUs' element={<ContactUs></ContactUs>}></Route>;
    </Routes>

    </div>
  );
}

export default App;
