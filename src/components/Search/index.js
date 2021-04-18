import React, { useState, useEffect, useContext } from 'react';
import ShopContext from '../../context/ShopContext';
import { SearchInput, SearchContainer, ButtonBlock } from './styles';

const Search = () => {
  const { products, searchProducts } = useContext(ShopContext);
  const [query, setQuery] = useState('');
  const [date, setDate] = useState('blank');
  const [duration, setDuration] = useState('');

  useEffect(() => {
    console.log(date);
    searchProducts(products, query);
    filterDate(date);
  }, [date, query, products]);

  const filterDate = (value) => {
    products.sort((a, b) => {
      //TODO: sort this by month so that Vue isn't first in the new one
      const dA = a.publishDate.split('/');
      const dB = b.publishDate.split('/');
      const dateA = new Date(dA[2], dA[1] - 1, dA[0]).valueOf();
      const dateB = new Date(dB[2], dB[1] - 1, dB[0]).valueOf();

      if (value === 'newest') {
        return dateA - dateB;
      } else if (value === 'oldest') {
        return dateB - dateA;
      } else {
        return [];
      }
    });
    console.log(products);
  };

  const filterDuration = (duration) => {
    //split at the : for duration
    //take the values and divide them to seconds
    //then get the total running time in minutes as one value
    //filter by the highest value
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

      <ButtonBlock>
        <div>
          Filter by date
          <select
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}>
            <option value=''>Select an option</option>
            <option value='newest'>Newest</option>
            <option value='oldest'>Oldest</option>
          </select>
        </div>

        <div>
          Filter by duration
          <select
            value={duration}
            onChange={(e) => {
              setDuration(e.target.value);
            }}>
            <option value=''>Select an option</option>
            <option value='longest'>Longest</option>
            <option value='shortest'>Shortest</option>
          </select>
        </div>
      </ButtonBlock>
    </SearchContainer>
  );
};

export default Search;
