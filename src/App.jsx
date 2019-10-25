import React from 'react';
import './App.css';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import SearchHome from './components/SearchHome';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <HomePage />
      <SearchHome />
      <Footer />
    </div>
  );
}

export default App;
