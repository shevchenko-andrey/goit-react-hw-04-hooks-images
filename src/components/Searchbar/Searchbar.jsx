import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  HeaderSearchbar,
  SearchForm,
  SearchButton,
  SearchLabel,
  SearchInput,
} from './Searchbar.styled';
class Searchbar extends Component {
  state = {
    query: '',
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ query: value.toLowerCase().trim() });
  };
  submitForm = e => {
    const { query } = this.state;
    const { onSubmit } = this.props;
    e.preventDefault();
    onSubmit(query);
  };
  render() {
    const { query } = this.state;

    return (
      <HeaderSearchbar>
        <SearchForm onSubmit={this.submitForm}>
          <SearchButton type="submit">
            <SearchLabel>Search</SearchLabel>
          </SearchButton>

          <SearchInput
            type="text"
            onChange={this.handleChange}
            value={query}
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </HeaderSearchbar>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
