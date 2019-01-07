import React from 'react';
import PropTypes from 'prop-types';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      searchText: event.target.value
    });
  }

  render() {
    return (
      <form className="searchform">
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.searchText}
        />
        <button
          onClick={event => {
            event.preventDefault();
            this.props.handleSubmit(this.state.searchText);
          }}
        >
          Search
        </button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default SearchForm;
