import React from 'react';
import {
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

// Components
import Appbar from './Components/Appbar';

function App() {
  return (
    <div>
      <Appbar />
    </div>
  );
}

export default withRouter(App);
