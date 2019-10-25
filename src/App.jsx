import React from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav';
import SearchHome from './components/SearchHome';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <SearchHome />
      <Footer />
    </div>
  );
}

export default App;
