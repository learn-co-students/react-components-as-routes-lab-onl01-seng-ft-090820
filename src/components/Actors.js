import React from 'react';
import { actors } from '../data';

const actorList = actors.map((actor, i) => {
  return (
    <div key={i}>
      {actor.name}
      <ul>
        {actor.movies.map((movie, i) => {
          return (
            <li key={i}>
            {movie}
          </li>
          )
        })}
      </ul>
    </div>
  )
})

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
        {/* {console.log(actors)} */}
        {actorList}
    </div>
  );
};

export default Actors;
