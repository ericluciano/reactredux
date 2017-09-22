import React from 'react'
import ReactDOM from 'react-dom'

import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import {persistStore, autoRehydrate} from 'redux-persist'

import promise from 'redux-promise'
//retorna um array de actions, todos em paralelo
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import reducers from './main/reducers'
import Routes from './main/routes'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = compose(applyMiddleware(thunk, multi, promise),autoRehydrate())(createStore)(reducers, devTools)

persistStore(store, {}, () => {
ReactDOM.render(
	<Provider store={store}>
		<Routes />
	</Provider>,
	document.getElementById('app'))
})
