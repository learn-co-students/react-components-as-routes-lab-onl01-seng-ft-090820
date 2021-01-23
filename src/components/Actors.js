import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorsList = actors.map(actor => {
    const moviesLis = actor.movies.map(movie => <li>{movie}</li>)
    return (
      <div>
        <h2>{actor.name}</h2>
        <ul>
          {moviesLis}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
};

export default Actors;
