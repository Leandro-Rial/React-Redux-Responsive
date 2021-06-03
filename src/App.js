import React from 'react';
import './scss/style.scss';
import Header from './containers/header/Header';
import Pages from './containers/mainPages/Pages';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Pages />
    </Router>
  );
}

export default App;
