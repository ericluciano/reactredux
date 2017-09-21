import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import App from './app'

import Test1 from '../test1/test1'
import Test2 from '../test2/test2'

export default props => (
	<Router history={hashHistory}>

		<Route path='/' component={App}>
			<IndexRoute component={Test1} />
			<Route path='test2' component={Test2} />
		</Route>
		
		<Redirect from='*' to='/' />
	</Router>
)