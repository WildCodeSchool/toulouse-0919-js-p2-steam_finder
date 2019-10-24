import React from 'react';
import './App.css';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
import Nav from './components/Nav';
import SearchHome from './components/SearchHome';

function App() {
  return (
    <div className="App">
      <Nav />
      <ErrorPage />
      <SearchHome />
      <Footer />
    </div>
  );
}

export default App;
