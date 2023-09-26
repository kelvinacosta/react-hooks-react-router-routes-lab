import React from "react";
import { movies } from "../data";
import { v4 as uuidv4 } from 'uuid'; 

function Movies() {
  
  const listOfMovies = movies.map(movie=>
  <div key={uuidv4()}>
    <ul>
      <li>
        {movie.title}
      </li>
      <li>
        {movie.genres}
      </li>
      <li>
        {movie.time}
      </li>
    </ul>
  </div>)
  
  return (
    <div>
      <h1>Movies Page</h1>
      {listOfMovies}
    </div>
  )
}

export default Movies;
