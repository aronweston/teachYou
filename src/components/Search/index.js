import React, { useState, useEffect, useContext } from 'react';
import ShopContext from '../../context/ShopContext';
import { SearchInput, SearchContainer } from './styles';

const Search = () => {
  // const [byDate, setByDate] = useState('');
  // const [byDuration, setByDuration] = useState('');
  const [query, setQuery] = useState('');
  const { products, results, searchProducts } = useContext(ShopContext);

  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    searchProducts(products, query);
  }, [query, products]);

  //React
  //JS
  //Vue
  //CSS

  const filterDate = (byDate) => {
    const x = products.filter((product) => {
      const today = new Date();
      const date = product.publishDate.split('/');
      const creationDate = new Date(date[2], date[1] - 1, date[0]);

      console.log(today, creationDate);
      return creationDate >= today;
    });

    console.log(x);
  };

  // const filterDuration = (byDuration) => {
  //   if (byDuration === 'recent') {
  //     products.map(({ publishDate }) => {
  //       console.log(publishDate, Date.parse(publishDate));
  //     });
  //   } else {
  //     console.log('f');
  //   }
  // };

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
          console.log(e.target.value);
          filterDate(e.target.value);
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

      {/* <div
        onChange={(e) => {
          console.log(e.target.value);
          filterDuration(e.target.value);
        }}>
        Sort courses by duration
        <input type='radio' id='shortest' value='shortest' name='duration' />
        <input type='radio' id='longest' value='longest' name='duration' />
      </div> */}

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
