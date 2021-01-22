import React from 'react';
import { directors } from '../data';

const directorList = directors.map((d, i) => {
  return (
    <div key={i}>
      {d.name}
      <ul>
        <li>
          Movies: {d.movies.join(", ")}
        </li>
      </ul>
    </div>
  )
})

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
        {/* {console.log(directors)} */}
        {directorList}
    </div>
  );
}

export default Directors
