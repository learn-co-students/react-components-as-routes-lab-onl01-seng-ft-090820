import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, key) => {
          return (
            <div key={key}>
              Name: {director.name}<br></br>
              Movie(s): {director.movies.map((title, key) => <li key={key}>{title}</li>)}
              <br></br>
            </div>
            
          )
        })}
    </div>
  );
}

export default Directors
