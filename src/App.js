import React from 'react';
import {
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

//Screens
import Home from './Screens/Home';
import About from './Screens/About';
import Services from './Screens/Services';
import Skills from './Screens/Skills';
import Portfolio from './Screens/Portfolio';
import Contact from './Screens/Contact';

// Components
import Appbar from './Components/Appbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Home />
      <Appbar />
      <div style={{ height: 50 }} />
      <About />
      <div style={{ height: 50 }} />
      <Services />
      <div style={{ height: 50 }} />
      <Skills />
      <div style={{ height: 50 }} />
      <Portfolio />
      <div style={{ height: 50 }} />
      <Contact />
      <div style={{ height: 50 }} />
      <Footer />
    </div>
  );
}

export default withRouter(App);
