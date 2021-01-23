import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorsList = directors.map(director => {
    const moviesLis = director.movies.map(movie => <li>{movie}</li>)
    return (
      <div> 
        <h2>{director.name}</h2>
        <ul>
          {moviesLis}
        </ul>
      </div> )}
    )
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsList}
    </div>
  );
}

export default Directors;
