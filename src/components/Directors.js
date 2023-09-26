import React from "react";
import { directors } from "../data";
import { v4 as uuidv4 } from 'uuid'; 

function Directors() {
  
  const listOfDirectors = directors.map(director=>
  <div key={uuidv4()}>
    {director.name}
    <ul>
      <li>
        {director.movies}
      </li>
      
    </ul>
    
  </div>
  )
  
  return(
   <div>
      <h1>Directors Page</h1>
      {listOfDirectors}
   </div>
  )
  
}

export default Directors;
