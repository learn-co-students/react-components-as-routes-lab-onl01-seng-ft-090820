import React from 'react';
import { movies } from '../data';

const movieList = movies.map(movie => {
  return (
    <div key={movie.title}>
      {movie.title}
      <ul>
        <li>
          Run Time: {movie.time} minutes
        </li>
        <li>
        Genres: {movie.genres.join(", ")}
        </li>
      </ul>
    </div>
  )
})

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {/* {console.log(movies)} */}
        {movieList}
    </div>
  );
};

export default Movies;
