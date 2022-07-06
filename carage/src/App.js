import './style.css';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import Footer from './Footer';



function App() {
  return (
    <div className="App">
      <>
      <Navbar/>
      <Home/>
      {/* <Contact /> */}
      <Footer/>
      </>
    </div>
  );
}

export default App;
