const INITIAL_STATE = {
	value: 'ola'
}

export default (state = INITIAL_STATE, action) => {

	switch(action.type){
		case 'TEST1_ACTION':
			return { ...state, value: action.payload }
		default:
			return state
	}

}