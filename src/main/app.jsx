import '../template/dependencias'

import React from 'react'
import Routes from './routes'

import Header from '../template/header'
import Messages from '../msg/messages'

const App = (props) => (
	<main className='container-fluid aj'>
		<Header />

		<div className='col-lg-12'>
			{props.children}
		</div>
		<Messages />
	</main>
)

export default App
