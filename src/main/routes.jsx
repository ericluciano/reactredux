import React from 'react'
import { BrowserRouter, Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'
import { useBasename } from 'history'

import { BASENAME } from '../constantes/const'
import App from './app'

import Test1 from '../test1/test1'
import Test2 from '../test2/test2'
import Promocao from '../promocao/promocao'
import PromocaoById from '../promocao/promocaoById'
import LoginForm from '../login/loginForm'

export default props => (

	<Router history={useBasename(() => browserHistory)({ basename: BASENAME })}>

		<Route path='/' component={App}>
			<IndexRoute component={Test1} />
			<Route path='test2' component={Test2} />
			<Route path='promocao' component={Promocao} />
			<Route path='promocao/:promo_id' component={PromocaoById} />
			<Route path='login' component={LoginForm} />
		</Route>

		<Redirect from='*' to='/' />

	</Router>

)
