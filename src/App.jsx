import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SearchHome from './components/SearchHome';
import FormContact from './components/FormContact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <HomePage />
          <SearchHome />
        </Route>
        <Route path="/FormContact">
          <FormContact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
