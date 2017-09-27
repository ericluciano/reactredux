import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

const Test2 = (props) => (
	<div>
		<div>Teste 2</div>
		<h3>{props.nirvana}</h3>		
		<Link to='/'>Home</Link>
		
	</div>
)
const mapStateToProps = ( state ) => (
	{nirvana: state.test1.value }
)
export default connect(mapStateToProps, null)(Test2)