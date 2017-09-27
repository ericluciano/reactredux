import React, { Component } from 'react'

import { changeTest, clearState } from './test1Actions'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Link } from 'react-router'

class Test1 extends Component{

	constructor(props){
		super(props)
		this.state = { time: '' }
		console.log(props)
	}



	_onChangeText(event){
		this.setState({time: event.target.value })
	}

	render(){
		//destructuring
		const { changeTest, clearState, value, list, tokenKey } = this.props

		return(
			<div>
				<Link to='/test2'>Home2</Link>
				Test1 {tokenKey}
				<h1>Oi {value}</h1>
				<input type="text" onChange={(e) => this._onChangeText(e)} value={this.state.time} />
				<button className="btn btn-default" onClick={() => changeTest(this.state.time)}>button</button>
				<button onClick={() => clearState() }>Limpar</button>
				{list.reverse().map(t => (
					<li key={t.id}>{t.text}</li>
				))}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return { list: state.test1.list, value: state.test1.value, tokenKey: state.login.token }
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators( { changeTest, clearState }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Test1)
