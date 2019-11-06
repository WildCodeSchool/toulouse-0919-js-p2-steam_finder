import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SearchHome from './components/SearchHome';
import FormContact from './components/FormContact';
import Players from './components/Players';


function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <HomePage />
          <SearchHome />
        </Route>
        <Route path="/Contact">
          <FormContact />
        </Route>
        <Route path="/players/:id" children={<Players />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
