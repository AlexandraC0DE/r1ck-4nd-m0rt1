import React from 'react';
import { useState } from 'react';
import axios from 'axios';


const SearchBox = ({setLocation}) => {

    const [ search, setSearch ] = useState("");
 
    const searchLocation = () =>{
        if (search >= 1 && search <= 126) {
         axios
        .get(`https://rickandmortyapi.com/api/location/${search}/`)
        .then((res)=>{setLocation(res.data)
                        console.log(res.data)})
        }
        
    }

    return (
        <div>
            <input className='input'
                type="text"
                placeholder='Type a number from 1 to 125...'
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />
            <button className='btn' onClick={searchLocation}>Search</button>

            <p>{search.name}</p>

        </div>
    );
};

export default SearchBox;