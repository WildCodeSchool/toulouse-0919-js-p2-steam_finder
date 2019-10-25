
import React from 'react';
import './App.css';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <HomePage/>
       <Nav />
      <Footer />
    </div>
  );
}

export default App;
