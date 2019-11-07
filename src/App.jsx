import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import SearchHome from './components/SearchHome';
import Footer from './components/Footer';
import Players from './components/Players';
import TotalGames from './components/TotalGames';
import ListOfGames from './components/ListOfGames';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <HomePage />
          <SearchHome />
        </Route>
        <Route path="/players/:id">
          <Players />
          <TotalGames />
        </Route>
        <Route path="/games/:id">
          <ListOfGames />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
