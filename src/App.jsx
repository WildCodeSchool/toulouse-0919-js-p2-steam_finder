import React from 'react';
import './App.css';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className="App">
      <ErrorPage />
      <Footer />
    </div>
  );
}

export default App;
