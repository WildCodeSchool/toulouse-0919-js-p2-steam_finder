import React from 'react';


import './App.css';
import ErrorPage from './components/ErrorPage';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Nav />
    <ErrorPage />
    <Footer />
    </div>
  );
}

export default App;
