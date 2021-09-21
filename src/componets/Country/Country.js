import React, { useState } from 'react';
import "./Country.css"
const Country = (props) => {

  const { name, capital, population, flag } = props.country;
  const [count, setCount] = useState(0);
  const countPlus = () => {
    if (count <= 95) {
      setCount(count + 5)
    }
  };
  const countMinus = () => {
    if (count >=5) {
       setCount(count - 5)
    }
  };

  return (
    <div className='country'>
      <h2>Name: {name} </h2>
      <p>Capital : {capital}</p>
      <p>population : {population}</p>
      <img src={flag} alt="" />
      <h1>Count Value : {count}</h1>

      <button onClick={countPlus}>pluse</button>
      <button onClick={countMinus}>Minus</button>



    </div>
  );
};

export default Country;