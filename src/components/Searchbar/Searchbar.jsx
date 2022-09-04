import { Component } from 'react';
import fields from './fields';
import PropTypes from 'prop-types';
import TextField from 'shared/TextField/TextField';

class Searchbar extends Component {
  static defaultProps = {
    onSubmit: () => {},
  };

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    value: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      value: target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.value === '') {
      alert('Введите другой запрос');
      this.reset();
    }
  };

  reset() {
    this.setState({ value: '' });
  }

  render() {
    const { search } = this.setState;
    const { handleChange, handleSubmit } = this;

    return (
      <>
        {/* <header className="searchbar"> */}
        <form className="searchForm" onSubmit={handleSubmit}>
          <button type="submit" className="searchForm-button">
            <span className="searchForm-button-label">Search</span>
          </button>

          <TextField
            value={search}
            onChange={handleChange}
            {...fields.search}
          />
        </form>
        {/* </header> */}
      </>
    );
  }
}

export default Searchbar;
