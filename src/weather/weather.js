import React from 'react'
import s from './weather.module.css'
import gradus from '../icons/gradus.png'
import feellike from '../icons/feellike.png'
import weather from '../icons/weather.png'



let Weather = (props) =>{
	
    let valueChanger=(e)=>{
    	let a = e.target.value
    	props.changeInputValue(a)
    } 

	return (
        
        <div className={s.body}>
            
            <input className={s.citySearch} onChange={valueChanger} value={props.inputValue}></input>
            <button className={s.button} onClick={props.click}>Search</button> 

            
           {!props.weatherInfo.main ? <p className={s.cityName}>Please write your city name</p> :
           <div className={s.weatherInfo}>
           <div>
           <p className={s.city}>{props.weatherInfo.name}</p>
           </div>

          <div> <img src={gradus}/> <p> {props.weatherInfo.main.temp}</p> </div>
         <div>  <img src={feellike}/><p> {props.weatherInfo.main.feels_like}</p> </div>
         <div>  <img src={weather}/> <p> {props.weatherInfo.weather[0].main}</p> </div>
           
            
           </div>}
            
            
        </div>

		)
}

export default Weather