import './style.css';

import Navbar from './Components/Navbar';
import Home from './Home';
import Contact from './Contact';
import Footer from './Footer';
import Charger from './Components/Singlepages/Charger/Charger';
import About from './About';
import {Routes,BrowserRouter, Route,Link} from "react-router-dom";
import Services from './Services';
import UserForm from './Registration/RegisterForm'
import LoginForm from './Registration/Login';
import Wash from './Wash';
import Form from './Form';
import Car_wash from './Components/Singlepages/Car_wash/Car_wash';
import Try from'./Components/Singlepages/Car_wash/Car_wash';





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
        <Route path="/Charger" element={<Charger />}/>
        <Route path="/Wash" element={<Wash />}/>
        <Route path="/SignUp" element={<UserForm />}/>
        <Route path="/Login" element={<LoginForm />}/>
      </Routes>
    </BrowserRouter>

    {/* <Form/> */}
    {/* <Try/> */}
   {/* < Wash/> */}
   {/* <Charger/> */}
    <Footer/>

  
    
    </>
  );
}

export default App;
