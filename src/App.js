import {React , Component ,useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import Banner from "./component/Banner"
import Skills from './component/Skills';
import Projects from "./component/Projects"
import Contact from "./component/Contact"
// import Newsletter  from "./component/News"
import Footer from "./component/Footer"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      {/* <Newsletter /> */}
      <Footer/>
    </div>
  );
}

export default App;
