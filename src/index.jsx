import React from 'react';
import { render } from 'react-dom';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import './style.css';

const App = () => (
  <div className="container">
    <Header />
    <Footer />
  </div>
);

render(<App />, document.querySelector('#app'));
