import React from 'react';
import './SearchBarFL.css';
import { Link } from 'react-router-dom';
import Loupe from '../images/loupe2.png';

const MAX_LENGTH = 17;
const regex = /^[^0-9]$/;

class SearchBarFL extends React.Component {
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

  handleSearch() {
    this.setState({ steamids: this.state.playerIds });
  }

  render() {
    return (
      <div className="search-container">
        <form className="form" onSubmit={this.handleSearch}>
          <input
            type="text"
            id="search-bar"
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
    );
  }
}

export default SearchBarFL;
