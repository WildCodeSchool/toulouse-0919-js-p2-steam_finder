import React from 'react';
import './SearchHome.css';
import Loupe from '../images/loupe.png';
import { Link } from 'react-router-dom';

const MAX_LENGTH = 17;
const regex = /^[^0-9]$/;

class SearchHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerIds: '',
      steamids: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    if (event.target.value.length > MAX_LENGTH) {
      return;
    }

    if (regex.test(event.target.value)) {
      return;
    }

    this.setState({ playerIds: event.target.value });
  }

  handleSearch(event) {
    this.setState({ steamids: this.state.playerIds });
  }

  render() {
    return (
      <div className="searchSection">
        <h1>Need to find a SteamUser?</h1>
        <h1>Search now!</h1>
        <div className="searchBar">
          <input
            className="idSearch"
            type="text"
            placeholder="Enter an Id number"
            value={this.state.playerIds}
            onChange={this.handleChange}
          />
          <Link to={`/players/${this.state.playerIds}`}>
            <button className="searchButton" type="submit" onClick={this.handleSearch}>
              <img className="searcheIcon" src={Loupe} alt="search" />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default SearchHome;
