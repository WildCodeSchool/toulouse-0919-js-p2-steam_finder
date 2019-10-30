import React from 'react';
import './App.css';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import SearchHome from './components/SearchHome';
import Footer from './components/Footer';
import Players from './components/Players';
import { Switch, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <HomePage />
          <SearchHome />
        </Route>
        <Route path="/players/:id" children={<Players />} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
