import React, { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { AiOutlineSearch } from 'react-icons/ai';
import Display from './Display';
import Error404 from './Error404';
function App() {
  const [location, setLocation] = useState("");
  const [error, setError] = useState(false);
  const [city, setCity] = useState("");
  const [json, setJson] = useState({});
  const [displayWindow, setdisplayWindow] = useState(true);

  const handleSubmit = async () => {
    setdisplayWindow(true);
    const APIKey = '40720e409660c8b6e1add2dd2793f330';
    const enteredCity = location.trim().toLocaleUpperCase();
    if (enteredCity === '')
      return;
    setLocation("");
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${enteredCity}&units=metric&appid=${APIKey}`)
      .then(res => res.json())
      .then(data => {
        if (data.cod === '404') {
          setError(true);
        } else {
          setError(false);
          setCity(enteredCity);
          setJson(data);
        }
      })
      .catch(error => {
        console.log('Error:', error);
        setError(true);
      });
  }

  return (
    <div className='flex flex-col h-[100vh] border bg-sky-900 items-center justify-center'>
      <div className='flex flex-col h-[60vh] items-center rounded-md bg-white'>
        <div className='flex items-center p-4 w-[28vw] bg-gray-100 rounded-md justify-between'>
          <FaLocationDot className='h-5 w-10' />
          <input
            type='text'
            value={location}
            placeholder='Location...'
            onChange={(e) => setLocation(e.target.value)}
            className='w-full text-lg focus:ring-0 p-1 bg-gray-100 outline-none'
          />
          <AiOutlineSearch
            className='h-10 w-10 cursor-pointer hover:bg-sky-200 transition rounded-full px-2'
            onClick={handleSubmit}
          />
        </div>
        <div className={`${displayWindow ? 'flex h-full w-full' : 'hidden'}`}>
          {error ? (
            <Error404 />
          ) : (
            <Display
              city={city}
              temp={json.main?.temp}
              humidity={json.main?.humidity}
              wspeed={json.wind?.speed}
              desc={json.weather[0]?.main}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;