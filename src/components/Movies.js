import React from 'react';
import { movies } from '../data';


const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, key) => {
          return (
            <div key={key}>
              Title: {movie.title}<br></br>
              Length: {movie.time}<br></br>
              Genre(s): {movie.genres.map((genre, key) => <li key={key}>{genre}</li>)}
              <br></br>
            </div>
            
          )
        })}
    </div>
  );
};

export default Movies;
