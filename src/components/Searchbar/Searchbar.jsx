import { Component } from 'react';

class Searchbar extends Component {
  state = {};
  render() {
    return (
      <>
        <header className="searchbar">
          <form className="form" onSubmit={}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>

            <input
              className="input"
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
