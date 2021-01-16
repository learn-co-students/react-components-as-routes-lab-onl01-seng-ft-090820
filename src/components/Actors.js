import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, key) => {
          return (
            <div key={key}>
              Name: {actor.name}<br></br>
              Movie(s): {actor.movies.map((title, key) => <li key={key}>{title}</li>)}
              <br></br>
            </div>
            
          )
        })}
    </div>
  );
};

export default Actors;
