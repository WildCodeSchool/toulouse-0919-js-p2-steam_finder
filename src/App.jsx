import React from 'react';

import './App.css';
import ErrorPage from './components/ErrorPage';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
    <Nav />
    <ErrorPage />
    </div>
  );
}

export default App;
