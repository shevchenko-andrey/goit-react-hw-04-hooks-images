import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  HeaderSearchbar,
  SearchForm,
  SearchButton,
  SearchLabel,
  SearchInput,
} from './Searchbar.styled';
const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };
  const submitForm = e => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <HeaderSearchbar>
      <SearchForm onSubmit={submitForm}>
        <SearchButton type="submit">
          <SearchLabel>Search</SearchLabel>
        </SearchButton>

        <SearchInput
          type="text"
          onChange={handleChange}
          value={query}
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </HeaderSearchbar>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
