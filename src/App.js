import React from 'react';
import {
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

//Screens
import About from './Screens/About';

// Components
import Appbar from './Components/Appbar';

function App() {
  return (
    <div>
      <Appbar />
      <div style={{ height: 50 }} />
      <About />
    </div>
  );
}

export default withRouter(App);
