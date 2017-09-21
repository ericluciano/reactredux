import React, { Component } from 'react'

import { changeTest } from './test1Actions'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class Test1 extends Component{

	constructor(props){
		super(props)
	}

	render(){
		const { changeTest } = this.props
		const time = 'flamengo'
		return(
			<div>
				Test1
				<h1>Oi {this.props.value}</h1>
				<button className="btn btn-default" onClick={() => changeTest(time)}>button</button>

			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return { value: state.test1.value }
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators( { changeTest }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Test1)