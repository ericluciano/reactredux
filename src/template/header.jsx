import React from 'react'
import { Link } from 'react-router'

export default (props) => (
	<header>
		<nav className="navbar navbar-default" role="navigation">
	<div className="container-fluid">

		<div className="navbar-header">
			<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
				<span className="sr-only">Toggle navigation</span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
			</button>
			<a className="navbar-brand" href="#">App</a>
		</div>


		<div className="collapse navbar-collapse navbar-ex1-collapse">
			<ul className="nav navbar-nav">
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/promocao'>Promoções</Link></li>
			</ul>

			<ul className="nav navbar-nav navbar-right">
				<li><Link to='/login'>Login</Link></li>

			</ul>
		</div>
	</div>
</nav>
	</header>
)
