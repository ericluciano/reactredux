const INITIAL_STATE = {
	value: '', list: []
}

export default (state = INITIAL_STATE, action) => {
	switch(action.type){
		case 'TEST1_ACTION':
			return { ...state, list: [...state.list, {id: Math.random(), text: action.payload}], value: action.payload}

		case 'TEST1_CLEAR':
			return { ...state, list:[], value:'' }
		default:
			return state
	}

}
