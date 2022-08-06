import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './Component/style.css'
import Header from './Component/Header'
import {BrowserRouter as Router,} from 'react-router-dom'
import Home from './Component/Home'
// import AboutUs from './Component/AboutUs'
// import OurFleet from './Component/Journey'
// import Footer from './Component/Footer'
// import DriveForUs from './Component/TexiTransfer'
// import Business from './Component/NewsArtical'


function App() {

  return (
    <>
    <Router>

     <Header/>
      <Home/>
    </Router>
    </>
  );
}

export default App;
