import { combineReducers } from 'redux'

import test1Reducer from '../test1/test1Reducer'


const rootReducer = combineReducers({
	//(state, action)
	test1: test1Reducer
	//test2: test2Reducer
})

export default rootReducer