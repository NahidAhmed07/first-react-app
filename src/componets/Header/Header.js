import React, { useEffect, useState } from 'react';



const Header = () => {  
  const [inputText, setInput] = useState('');
  const [btnState, setBtnState] = useState(true);
  const [country, setCountry] = useState([]);
  const getInputValue = (event) => {
    setInput(event.target.value)
  }
  const clickBtn = () => {
    setBtnState(!btnState)
  }
  

  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/name/${inputText}`
    if (inputText) {
      fetch(url).then(res => res.json()).then(data => setCountry(data));
      setInput('');
    }
  }, [btnState])

  console.log(country);

  return (
    <div>
      <input type="text" onChange={getInputValue} />
      <button onClick={clickBtn}>Search</button>
      
    </div>
  );
};

export default Header;