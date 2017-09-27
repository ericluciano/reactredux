import { combineReducers } from 'redux'

import test1Reducer from '../test1/test1Reducer'
import loginReducer from '../login/loginReducer'
import promocaoReducer from '../promocao/promocaoReducer'

import { reducer as toastrReducer } from 'react-redux-toastr'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
	//(state, action)
	//test2: test2Reducer
	test1: test1Reducer,
	toastr: toastrReducer,
	login: loginReducer,
	form: formReducer,
	promocao: promocaoReducer
})

export default rootReducer
