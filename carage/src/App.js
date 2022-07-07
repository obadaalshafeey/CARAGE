import './style.css';

import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Car_wash from './Components/Singlepages/Car_wash/Car_wash';
import Charger from './Components/Singlepages/Charger/Charger';



function App() {
  return (
    <div className="App">
      <>
      
<Car_wash/>
<Charger/>

      <Navbar/>
      <Home/>
      <Footer/>
      </>
    </div>
  );
}

export default App;
