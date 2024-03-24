import { GoogleMap, StandaloneSearchBox, LoadScript } from '@react-google-maps/api'; 
import React, { useState } from 'react';
import ContactUs from '../contact-us/ContactUs.js';

import './DatabaseDemo.css';

const API_key = "AIzaSyAYQUveBr8Sw7YG1B6ZfT3l9RiH3QmMGnk"; 

const MapAutocomplete = ({ onAddressData }) => {
  const [searchBox, setSearchBox] = useState(null);
  const [output, setOuput] = useState(null); 

  const onLoad = (ref) => {
    setSearchBox(ref);
    if (ref) {
      const usaBounds = {
        east: -66.93457,
        west: -124.831,
        north: 49.384358,
        south: 24.396308,
      };
      ref.setBounds(usaBounds);
    }    
  };


  const onPlacesChanged = () => {
    const places = searchBox.getPlaces();
    if (places.length > 0) {
      const place = places[0];
      // update the addressData state 
      onAddressData(place);
      setOuput(place); 
    }
  };


  return (
    <div>
      <div className='database-demo'>
        <LoadScript
          googleMapsApiKey={`${API_key}`}
          libraries={['places']}
        >
          <StandaloneSearchBox
            onLoad={onLoad}
            onPlacesChanged={onPlacesChanged}        
            options={{
              types: ['address'],
              componentRestrictions: { country: 'us' },
              fields: ['address_components', 'geometry', 'icon', 'name'],
            }}
          >
            <input
              type="text"
              placeholder="Search for a property" 
              className='search-bar'          
            />
          </StandaloneSearchBox>
            
        </LoadScript>
      </div> 
      {/* <div className='database-demo'>  
        {output && (
            <div className='results'> 
              <p>State: {output.address_components[5].long_name}</p> 
              <p>County: {output.address_components[4].long_name}</p>
              <p>Street number: {output.address_components[0].short_name}</p> 
              <p>Street name: {output.address_components[1].long_name}</p> 
            
              <div className='message-in-progress'>
                <p>
                We have located the property in {output.address_components[4].long_name} in the state of {output.address_components[5].long_name}. 
                </p>
                We are trying our best building the database here. 
                Please contact us to learn more. 
              </div>
              <ContactUs/>
            </div>
        )}    
      </div> */}
    </div>
  );
};

export default MapAutocomplete;