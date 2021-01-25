import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(m => 
        <div>
          <h2>Name: {m.title}</h2>
          <h3>Time: {m.time}</h3>
          Genres:
          <ul>
            {m.genres.map(genre => 
              <li>{genre}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Movies;
