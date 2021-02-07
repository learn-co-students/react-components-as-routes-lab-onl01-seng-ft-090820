import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(m => (
      <div>
        <h2>Name: {m.title}</h2>
        <br/>
        <h3>Time: {m.time}</h3><br/>
        Genres:
        <ul>{m.genres.map(g => <li>{g}</li>)}</ul>
        </div>))}
    </div>
  );
};

export default Movies;