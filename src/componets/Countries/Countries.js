import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {

  const url = "https://restcountries.eu/rest/v2/all";

  const [countries, setCountries] = useState([]);

  useEffect(() => {

    fetch(url)
      .then(res => res.json())
    .then(data => setCountries(data))
  
  }, [])
  
  


  return (
    <div >
      <h1 className='heading'>Hello world</h1>
      <div className='countries-parent'>
        {
        countries.map(country => <Country country={country} key={country.alpha3Code}></Country>)
      }
      </div>

    </div>
  );
};

export default Countries;
