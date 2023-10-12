import logo from './logo.svg';
import './App.css';
import Header from './components/Mynavbar.jsx'
import Section1 from './components/Hero-section.jsx'
import Card_section from './components/Card_section'
import Navtabs_section from './components/Navtabs.jsx'
import Footter_section from './components/Last_section'
import Product_section from './components/Product_section'



function App() {
  return (
    <div className="App">
     <Header/>
     <Section1/>
     <Card_section/>
     <Navtabs_section/>
     <Product_section/>
     <Footter_section/>
    
    </div>
  );
}

export default App;
