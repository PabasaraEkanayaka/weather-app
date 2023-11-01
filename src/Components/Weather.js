/* eslint-disable no-unused-vars */
import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './Weather.css'


const API_KEY = "a50a6afe21e9ee3a61dd1ecf4800ebb5";

function Weather() {

    const {logout} = useAuth0()

    const [weatherData, setWeatherData] = useState(null);

    const [city, setCity] = useState("");

    const handleSubmit = async(event) => {
      event.preventDefault();
      const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`);
      if(!response.ok){
        setWeatherData(null);
        return;
      }
      const data=await response.json();
      setWeatherData(data);
      console.log("value", data);
    };

    const handleCityChange=(event)=>{
      setCity(event.target.value);
    };

    const days = [
      "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
    ];

    const forecast = weatherData 
    ? weatherData.list
    .filter((item,index) => index % 8 === 0)
    .slice(0,5)
    .map((item) => {
      const date = new Date(item.dt*1000);
      const day = days[date.getDay()];
      const temperature = Math.round(((item.main.temp - 273.15) * 9) / 5 + 32);
      const description =item.weather[0].description;
      return {date, day, temperature, description};
    })
    : [];
  return (
    
    <div style={{padding:"180px"}}>
        <Button variant='contained' size='small' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</Button>
        <div>
      <form onSubmit={handleSubmit}>
        <input className='search-container' type='text' placeholder='Enter City'
        value={city}
        onChange={handleCityChange}
      />
      <button className='search-button' type='submit'>Search</button>
      </form>
      {weatherData === null ?(
        <p>No Data Available</p>
      ) : weatherData ? (
        weatherData.cod = "200" ? (
          <>
          {"Here is the next five days weather details of : "}
          <b>{weatherData.city.name}</b>
          <div className="card-container">
            {forecast.map((item) => (
              <div className="card" key={item.date}>
                <h3>
                  <u>{item.day}</u>
                </h3>
                <p>{item.date.toLocaleDateString()}</p>
                <p>Temperature:{item.temperature} F</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          </>
        ):(
          <p>No Data Available</p>
        )
      ):(
        <p>Loading</p>
      )}
    
    </div>
    </div>
    
    
  )
}

export default Weather