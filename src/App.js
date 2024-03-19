import './App.css';
import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import PortefolioItem from './components/PortefolioItem';





function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <PortefolioItem />
      
    </div>
  );
}

export default App;

