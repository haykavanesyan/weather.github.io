import React from 'react'
import s from './weather.module.css'
import temp from '../icons/temp.png'
import sun from '../icons/sun.png'
import rain from '../icons/rain.png'
import storm from '../icons/storm.png'
import cloud from '../icons/cloud.png'



let Weather = (props) =>{
	
    let valueChanger=(e)=>{
    	let a = e.target.value
    	props.changeInputValue(a)
    } 

    

	return (
        
        <div className={s.body}>
            
            <input className={s.citySearch} onChange={valueChanger} value={props.inputValue}></input>
            <button className={s.button} onClick={props.click}>Search</button> 

            
           {!props.weatherInfo.main ? <p className={s.cityName}>Hike's WeatherApp</p> :

           <div className={s.weatherInfo}>
           <div className={s.temp}><img src={temp}/><p> {props.weatherInfo.main.temp}°</p> </div> 

           <div className={s.city}> <p>{props.weatherInfo.name}</p></div>
           <div className={s.weather}> <img src={props.weatherIcon()}/> </div>
           
           
           
            
           </div>}
            
            
        </div>

		)
}

export default Weather