import React, { useState, useEffect, useContext } from 'react';
import ShopContext from '../../context/ShopContext';
import { SearchInput } from './styles';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const { products } = useContext(ShopContext);

  useEffect(() => {
    setResults(products[0].lessons.filter((lesson) => lesson.name === query));
  }, [query]);

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

      {results?.map((lesson) => (
        <p>{lesson.name}</p>
      ))}
    </div>
  );
};

export default Search;
