import React, { useState, useContext } from 'react';
import ShopContext from '../../context/ShopContext';
import { SearchInput } from './styles';

const Search = () => {
  const [query, setQuery] = useState('');

  return (
    <div>
      <SearchInput
        type='text'
        placeholder='Search for a course'
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <p>{query}</p>
    </div>
  );
};

export default Search;
