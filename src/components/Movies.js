import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const moviesList = movies.map(movie => {
    const genresLis = movie.genres.map(genre => <li>{genre}</li>)
    return (
      <div> 
        <h2>{movie.title}</h2>
        <h3>{movie.time}</h3>
        <ul>
          {genresLis}
        </ul>
      </div> )}
    )
  return (
    <div>
      <h1>Movies Page</h1>
      {moviesList}
    </div>
  );
};


export default Movies;
