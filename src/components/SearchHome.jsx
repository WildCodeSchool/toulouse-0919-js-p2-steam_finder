import React from 'react';
import './SearchHome.css';
import Loupe from '../images/loupe.png';

const MAX_LENGTH = 17;
const regexId = /^[^0-9]$/;

class SearchHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerId: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.value.length > MAX_LENGTH) {
      return;
    }

    if (regexId.test(event.target.value)) {
      return;
    }

    this.setState({ playerId: event.target.value });
  }

  render() {
    return (
      <div className="searchSection">
        <p>Need to find a SteamUser?</p>
        <p>Search now!</p>
        <div className="searchBar">
          <input
            className="idSearch"
            type="text"
            placeholder="Enter an Id number"
            value={this.state.playerId}
            onChange={this.handleChange}
          />
          <button className="searchButton" type="submit">
            <img className="searcheIcon" src={Loupe} alt="search" />
          </button>
        </div>
      </div>
    );
  }
}

export default SearchHome;
