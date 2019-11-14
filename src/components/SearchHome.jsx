import React from 'react';
import './SearchHome.css';
import { Link } from 'react-router-dom';
import Loupe from '../images/loupe.png';

const MAX_LENGTH = 17;
const regex = /[^0-9]/g;

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
      event.target.value = '';
    }

    this.setState({ playerIds: event.target.value });
  }

  handleSearch() {
    this.setState({ steamids: this.state.playerIds });
  }

  render() {
    return (
      <div className="searchSection">
        <p>Need to find a SteamUser?</p>
        <p>Search now!</p>
        <div className="searchBar">
          <form onSubmit={this.handleSearch}>
            <input
              className="idSearch"
              type="text"
              placeholder="Enter an Id number"
              value={this.state.playerIds}
              onChange={this.handleChange}
            />
            <Link className="linkButton" to={`/players/${this.state.playerIds}`}>
              <button className="searchButton" type="submit" onSubmit={this.handleSearch}>
                <img className="searcheIcon" src={Loupe} alt="search" />
              </button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchHome;
