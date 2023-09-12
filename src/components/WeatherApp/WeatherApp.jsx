import React, { useState } from 'react'
import '../WeatherApp/WeatherApp.css'
import search_icon from '../../assets/search.png'
import clear_icon from '../../assets/clear.png'
import cloud_icon from '../../assets/cloud.png'
import drizzle_icon from '../../assets/drizzle.png'
import rain_icon from '../../assets/rain.png'
import snow_icon from '../../assets/snow.png'
import wind_icon from '../../assets/wind.png'
import humidity_icon from '../../assets/humidity.png'
import clear_img from '../../assets/clearImg.jpg'
import cloud_img from '../../assets/cloudImg.jpg'
import snow_img from '../../assets/snowImg.jpg'
import rain_img from '../../assets/rainImg.jpg'
import clearNight_img from '../../assets/clearNight.jpg' 
import cloudNight_img from '../../assets/cloudNight.jpg'
import snowNight_img from '../../assets/snowNight.jpg'
import rainNight_img from '../../assets/rainNight.jpg'


function WeatherApp() {

  let api_key = "7046c25f3c360a37905eccfd0b746747"

  const [wicon, setWicon] = useState(cloud_icon);
  const [bgImg, setBgImg] = useState(clear_img);

  const search  = async () => {
    const element = document.getElementsByClassName("cityInput")
    if (element[0].value === ""){
      return 0;
    }
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&lat=57&lon=-2.15&appid=${api_key}`
    
    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temprature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location")

    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = Math.floor(data.wind.speed) + "km/h";
    temprature[0].innerHTML = Math.floor(data.main.temp) + "°C";
    location[0].innerHTML = data.name;

    if (data.weather[0].icon === "01d"){
      setWicon(clear_icon);
      setBgImg(clear_img);
    }
    else if (data.weather[0].icon === "01n"){
      setWicon(clear_icon);
      setBgImg(clearNight_img);
    }
    else if (data.weather[0].icon === "02d"){
      setWicon(cloud_icon);
      setBgImg(cloud_img);
    }
    else if (data.weather[0].icon === "02n"){
      setWicon(cloud_icon);
      setBgImg(cloudNight_img);
    }
    else if (data.weather[0].icon === "03d"){
      setWicon(drizzle_icon);
      setBgImg(rain_img);
    }
    else if (data.weather[0].icon === "03n"){
      setWicon(drizzle_icon);
      setBgImg(rainNight_img);
    }
    else if (data.weather[0].icon === "04d"){
      setWicon(drizzle_icon);
      setBgImg(rain_img);
    }
    else if (data.weather[0].icon === "04n"){
      setWicon(drizzle_icon);
      setBgImg(rainNight_img);
    }
    else if (data.weather[0].icon === "09d"){
      setWicon(rain_icon);
      setBgImg(rain_img);
    }
    else if (data.weather[0].icon === "09n"){
      setWicon(drizzle_icon);
      setBgImg(rainNight_img);
    }
    else if (data.weather[0].icon === "10d"){
      setWicon(rain_icon);
      setBgImg(rain_img);
    }
    else if (data.weather[0].icon === "10n"){
      setWicon(rain_icon);
      setBgImg(rainNight_img);
    }
    else if (data.weather[0].icon === "13d"){
      setWicon(snow_icon);
      setBgImg(snow_img);
    }
    else if (data.weather[0].icon === "13n"){
      setWicon(snow_icon);
      setBgImg(snow_img);
    }
    else{
      setWicon(clear_icon);
      setBgImg(clear_img);
    }
  }

  return (
    <>
    <section className='weatherApp w-full h-[1000px] bg-black'> 
        <img src={bgImg} alt="" className='w-full h-full'/>
        <div className='overlay'></div>
        <div className='container w-[600px]'>
            <div className='top-bar'>
                <input type="text" className='cityInput' placeholder='Search'/>
                <div className='search-icon' onClick={()=> {search()}}>
                    <img src={search_icon} alt="" />
                </div>
            </div>   
            <div className='weather-image'>
              <img src={wicon} alt="" />
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
                  <div className="wind-rate"> 18 km/h </div>
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