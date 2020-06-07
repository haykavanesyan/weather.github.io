let stateDefault = {
	weatherInfo: {},
	inputValue: "",
	city: "",
}

export let weatherReducer = (state = stateDefault, action) => {

	switch (action.type) {
		case "INPUT_VALUE":
		     return {
		     	...state,
		     	inputValue: action.value,
		     	

		     }
			return state;
		case "SET_STATE":
		     return {
		     	...state,
		     	weatherInfo: {...action.data}
		     }
			return state;
        case "CLEAR_VALUE":
        return {
        	...state,
        	inputValue: ""
        }
		

		default:
		 return state
	}
}