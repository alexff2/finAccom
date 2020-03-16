import React from 'react';

import './App.css';
import Menu from './Components/lateral-menu'
import Routes from './routes'

const App = () => (
  <div className="container">
    <Menu />
    <div className="content">
      <Routes />
    </div>
  </div>
)

export default App;
