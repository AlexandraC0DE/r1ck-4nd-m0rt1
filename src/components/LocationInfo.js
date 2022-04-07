import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const LocationInfo = ({ characterUrl }) => {

    const [ character, setCharacter ] = useState({});

    useEffect(() => {
        axios.get(characterUrl).then((res) => setCharacter(res.data));
    }, [characterUrl]);


    

    return (
      
        <div className='Container'>

            <div className='card'>

                    <li className='cardContainer'>
                        <h2>{character?.name}</h2> 
                        <p className='status'>{character?.status}</p>
                    </li>
                    
                    <img src={character?.image} alt="Rick & Morty API"/>
            
                    <li className='back'>
                        <p><span>Specie: </span> {character?.species}</p>
                        <p><span>Origin: </span> {character?.origin?.name}</p>
                        <p><span>Episodes where appear: </span> {character?.episode?.length}</p>
                    </li>

           </div>

        </div>
    );
};

export default LocationInfo;
