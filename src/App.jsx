import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import SearchHome from './components/SearchHome';
import FormContact from './components/FormContact';
import Players from './components/Players';
import ErrorPage from './components/error-page/ErrorPage';
import TotalAchievements from './components/TotalAchievements';
import TotalGames from './components/TotalGames';
import TotalFriends from './components/TotalFriends';
import ListOfGames from './components/ListOfGames';
import About from './components/About';
import Podium from './components/Podium';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <HomePage />
          <SearchHome />
        </Route>
        <Route path="/error-page">
          <ErrorPage />
        </Route>
        <Route path="/players/:id">
          <Players />
          <Podium />
          <TotalGames />
          <TotalFriends />
          <TotalAchievements />
        </Route>
        <Route path="/About">
          <About />
          <FormContact />
        </Route>
        <Route path="/Contact">
          <About />
          <FormContact />
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
