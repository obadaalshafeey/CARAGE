import './style.css';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import Footer from './Footer';
import Services from './Services';
import Wash from './Wash';
// import Example from './Form';




function App() {
  return (
    <div className="App">
      <>
      <Navbar/>
      <Wash/>
      {/* <Example/> */}
      {/* <Home/> */}
      {/* <Contact /> */}
      {/* <Services/> */}
      
      <Footer/>
      </>
    </div>
  );
}

export default App;
