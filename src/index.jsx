import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { render } from 'react-dom';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Home } from './Home/Home';
import { Reservation } from './Reservation/Reservation';
import './style.css';

const App = () => {

  return (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/">
            <Home />
          </Route>
      <Route path="/reservation">
            <Reservation />
          </Route>
    </Switch>
    <Footer />
  </Router>
  )
};

render(<App />, document.querySelector('#app'));
