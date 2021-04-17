import React, { useState, useEffect, useContext } from 'react';
import ShopContext from '../../context/ShopContext';
import { SearchInput, SearchContainer } from './styles';

const Search = () => {
  // const [byDate, setByDate] = useState('');
  // const [byDuration, setByDuration] = useState('');
  const [query, setQuery] = useState('');
  const { products, results, searchProducts } = useContext(ShopContext);

  const [filtered, setFiltered] = useState([]);
  const [date, setDate] = useState('');

  useEffect(() => {
    searchProducts(products, query);
    console.log(date);
    filterDate(date);
  }, [date, query, products]);

  //React
  //JS
  //Vue
  //CSS

  const filterDate = (value) => {
    const sorted = products.sort((a, b) => {
      const dA = a.publishDate.split('/');
      const dB = b.publishDate.split('/');
      const dateA = new Date(dA[2], dA[1] - 1, dA[0]).valueOf();
      const dateB = new Date(dB[2], dB[1] - 1, dB[0]).valueOf();
      if (value === 'newest') {
        return dateB - dateA;
      } else if (value === 'oldest') {
        return dateA - dateB;
      } else {
        return [];
      }
    });
    setFiltered(sorted);
  };

  return (
    <SearchContainer>
      <SearchInput
        type='text'
        placeholder='Search for a course'
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />

      <div
        onChange={(e) => {
          setDate(e.target.value);
        }}>
        Sort courses by date
        <input
          selected
          type='radio'
          id='oldest'
          value='oldest'
          name='duration'
        />
        <input type='radio' id='newest' value='newest' name='duration' />
      </div>

      <br></br>
      {filtered.map((p) => (
        <div>
          <p>{p.name}</p>
          <p>{p.duration}</p>
        </div>
      ))}
    </SearchContainer>
  );
};

export default Search;
