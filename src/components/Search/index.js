import React, { useState, useEffect, useContext } from 'react';
import ShopContext from '../../context/ShopContext';
import { SearchInput } from './styles';

const Search = () => {
  const [query, setQuery] = useState('');
  const { products } = useContext(ShopContext);
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(
      products.filter((lesson) => {
        const lessonArr = lesson.name
          .split(' ')
          .join(',')
          .replace(/[,-]/g, '')

          .toLowerCase();

        const queryArr = query
          .split(' ')
          .join(',')
          .replace(/[,-]/g, '')
          .toLowerCase();

        console.log(lessonArr, queryArr);
        return lessonArr.includes(queryArr);
      })
    );

    //     // return lesson.name.toLowerCase().includes(query.toLowerCase());
    //   })
  }, [query, products]);

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

      {results.map((lesson) => (
        <p key={lesson.id}>{lesson.name}</p>
      ))}
    </div>
  );
};

export default Search;
