import React from 'react';
import './components/css/app.css'
import Nav from './components/nav';
import NavMobile from './components/mobilenavigation';
import SlideShow from './components/slideShow';
import BurgersMenu from './components/BurgersMenu';
import About from './components/About';
import Contactus from './components/Contactus';
function App() {
  return (
    <div className="App">
      <Nav/>
      <NavMobile/>
      <SlideShow/>
      <BurgersMenu/>
      <About/>
      <Contactus/>
    </div>
  );
}

export default App;
