import React from "react";
import { actors } from "../data";
import { v4 as uuidv4 } from 'uuid'; 

function Actors() {
  
  const listOfActors = actors.map(actor=>
    <div key={uuidv4()}>{actor.name}
      <ul>
        <li>
          {actor.movies}
        </li>
      </ul>
    </div>
    )
  
  return (
    <div>
      <h1>Actors Page</h1>
      {listOfActors}
    </div>
  )
  
}

export default Actors;
