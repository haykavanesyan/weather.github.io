import {combineReducers, createStore} from 'redux'
import {weatherReducer} from './weatherReducer'

let reducers = combineReducers({
	weatherInfo: weatherReducer,
})
let store = createStore(reducers)

export default store