import React from 'react';
import LocationInfo from './LocationInfo';

const CharacterList = ({Location}) => {
    console.log(Location);
    return (
        <div>
            {Location?.residents?.map( url => (
                <LocationInfo
                    characterUrl={url}
                    key={url}
                />
            ))}
        </div>
    );
};

export default CharacterList;
