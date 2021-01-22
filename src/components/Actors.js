import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
        {actors.map(act => <div> <h2>Name: {act.name}</h2> <h2>Movies:<ul>{act.movies.map(m => <li>{m}</li>)} </ul></h2> </div> )}
    </div>
  );
};

export default Actors;
