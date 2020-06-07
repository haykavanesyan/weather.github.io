import React from 'react'
import {connect} from 'react-redux'
import Weather from './weather'
import * as axios from 'axios'

class weatherContainer extends React.Component{

citysWeather(){

		let citySearch = this.props.inputValue
		axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=d00ebd7514a99801bdd4bf8a81075167&units=metric`).then(res=>{
			this.props.setState(res.data)		
		})
		   this.props.clearValue()
	}

	



	render(){
		return <Weather  
		weatherInfo={this.props.weatherInfo} 
		inputValue={this.props.inputValue}
		changeInputValue={this.props.changeInputValue}
		click = {this.citysWeather.bind(this)}
		
		/>



	}
}


let mapStateToProps = (state) =>{
	return ({
		weatherInfo: state.weatherInfo.weatherInfo,
		inputValue: state.weatherInfo.inputValue,
		city: state.weatherInfo.city
	})
}

let mapDispatchToProps = (dispatch) =>{
	return ({
		setState: (data) => {dispatch({type: "SET_STATE", data})},
		changeInputValue: (value) => {dispatch({type: "INPUT_VALUE", value})},
		clearValue: () =>{dispatch({type: "CLEAR_VALUE"})}
		
	})
}

export default connect(mapStateToProps,mapDispatchToProps)(weatherContainer)