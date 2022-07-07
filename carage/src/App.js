import './style.css';

import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import Footer from './Footer';
import Car_wash from './Components/Singlepages/Car_wash/Car_wash';
import Charger from './Components/Singlepages/Charger/Charger';
import About from './About';
import {Routes,BrowserRouter, Route,Link} from "react-router-dom";
// import './js/main'
// import {$,jQuery} from 'jquery';
import Services from './Services';
import Wash from './Wash';
// import Example from './Form';




function App() {
  return (
      <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Services" element={<Services />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>

    <Footer/>
    </>
  );
}

export default App;
