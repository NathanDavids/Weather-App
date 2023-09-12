import React from 'react'
import '../WeatherApp/WeatherApp.css'
import search_icon from '../../assets/search.png'
// import clear_icon from '../../assets/clear.png'
import cloud_icon from '../../assets/cloud.png'
// import drizzle_icon from '../../assets/drizzle.png'
// import rain_icon from '../../assets/rain.png'
// import snow_icon from '../../assets/snow.png'
import wind_icon from '../../assets/wind.png'
import humidity_icon from '../../assets/humidity.png'

function WeatherApp() {
  return (
    <>
    <section className='weatherApp w-full h-[1000px] bg-black'> 
        <div className='container w-full h-[850px] bg-white'>
            <div className='top-bar'>
                <input type="text" className='cityInput' placeholder='Search'/>
                <div className='search-icon'>
                    <img src={search_icon} alt="" />
                </div>
            </div>   
            <div className='weather-image'>
              <img src={cloud_icon} alt="" />
            </div> 
            <div className='weather-temp'> 24°C </div>
            <div className='weather-location'> London </div>
            <div className="data-container">
              <div className="element">
                <img src={humidity_icon} alt="" />
                <div className="data">
                  <div className="humidity-percent"> 64% </div>
                  <div className='text'> Humiduty </div>
                </div>
              </div>
              <div className="element">
                <img src={wind_icon} alt="" />
                <div className="data">
                  <div className="humidity-percent"> 18 km/h </div>
                  <div className='text'> Wind Speed </div>
                </div>
              </div>
            </div>
        </div> 
    </section>
    </>
  )
}

export default WeatherApp