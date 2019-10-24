import React from 'react';
import './App.css';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
import Nav from './components/Nav';
import SearchHome from './components/SearchHome';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Nav />
      <HomePage />
      <ErrorPage />
      <SearchHome />
      <Footer />
    </div>
  );
}

export default App;
