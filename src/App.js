import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import axios from 'axios';

import SearchBox from "./components/SearchBox";
import CharacterList from "./components/CharacterList";
import './styles.css';

function App() {

  const [ Location, setLocation ] = useState({});
  
  useEffect(() => {
    const random = Math.floor(Math.random() * 126) +1;
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
      .then(res => setLocation(res.data));
  },[])

console.log(Location);

  return (
    <div className="App">
        <SearchBox setLocation = {setLocation}/>
    
        <h1 h1 className="headerText"><span>Location: </span>{Location?.name}</h1>
        <p className="one"><span>Residents: </span>{Location?.residents?.length}</p>
        <p className="two"><span>Dimension: </span>{Location?.dimension}</p>
        <p className="three"><span>Type: </span>{Location?.type}</p>


        <CharacterList Location={Location} />
    </div> 
  );
}

export default App;
