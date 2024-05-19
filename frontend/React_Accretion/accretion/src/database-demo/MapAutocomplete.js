import { GoogleMap, StandaloneSearchBox, LoadScript } from '@react-google-maps/api'; 
import React, { useState, useCallback } from 'react';
import Button from 'react-bootstrap/Button';

import './DatabaseDemo.css';

const API_key = "AIzaSyAYQUveBr8Sw7YG1B6ZfT3l9RiH3QmMGnk"; 

const MapAutocomplete = ({ updateAddressInfo }) => {
  const [searchBox, setSearchBox] = useState(null);

  // states for ATTOM API
  const [addressInfo, setAddressInfo] = useState({
    "street_number": "",
    "route": "", 
    "locality": "",
    "unit": "",
    "state": "",
    "zipcode": ""
  }); 
  const updateAddress = (key, val) => {
    setAddressInfo(prevState => ({
      ...prevState, 
      [key]: val
    }));
  }
  
  const [unit, setUnit] = useState('');

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

  const onPlacesChanged = useCallback(() => {
    if (!searchBox) {
      console.error("searchbox ref is null");
      return;
    }
    if (typeof searchBox.getPlaces !== 'function') {
      console.error("searchBox.getPlaces is not a function.");
      return;
    }
    const places = searchBox.getPlaces();
    if (places.length > 0) {                  
      if (places && places.length > 0) {
        const place = places[0];                                            
        place.address_components.forEach(component => {
          if (component.types.includes('street_number')) {          
            updateAddress("street_number", component.long_name); 
          } else if (component.types.includes('route')) {
            updateAddress("route", component.long_name); 
          } else if (component.types.includes('locality')) {
            updateAddress("locality", component.long_name); 
          } else if (component.types.includes('administrative_area_level_1')) {
            updateAddress("state", component.long_name); 
          } else if (component.types.includes('postal_code')) {
            updateAddress("zipcode", component.long_name); 
          } 
        });      
      }
    }
  },[searchBox]);

  const submitSearch = () => {      
    if (unit) {
      updateAddress("unit", unit)
    }    
    updateAddressInfo(addressInfo);
  }


  return (    
    <div >
      <LoadScript
        googleMapsApiKey={`${API_key}`}
        libraries={['places']}
      >
        <div className='map-autocomp-row'>
          <div id='map-autocomp-col' style={{flex:4}}>
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
                placeholder="Enter Address" 
                className='search-bar'                                 
              />
            </StandaloneSearchBox>
          </div>
          <div id='map-autocomp-col'>
            <input 
              type='text' 
              placeholder='Unit'
              className='search-bar'   
              value={unit}
              onChange={(e) => {
                updateAddress("unit", e.target.value);
                setUnit(e.target.value);
              }}
            />   
          </div>  
          <div id='map-autocomp-col'>
            <Button 
              variant='outline-primary' id='search-button'
              onClick={submitSearch}>
              Search
            </Button>
          </div>
        </div>
       
      </LoadScript>
    </div>           
  );
};

export default MapAutocomplete;