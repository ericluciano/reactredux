import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { autenticar, logout, validateToken } from './loginActions'
import If from '../operators/If'


class LoginForm extends Component{

  constructor(props){
    super(props)

    this.state = { email: 'ericluciano1@outlook.com', password: 'flamengo'}
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
  }

  componentWillMount(){

    console.log('montou')

    if(this.props.token)
      this.props.validateToken(this.props.token)
  }

  onChangeEmail(e){
    this.setState({email: e.target.value })
  }

  onChangePassword(e){
    this.setState({password: e.target.value })
  }

  render(){

    const { autenticar, logout, token, usuario } = this.props

    const authLoginForm = () => (

      <div className="panel-body">

        <div className="form-group">

          <input type="text" name='email' onChange={this.onChangeEmail} value={this.state.email} className='col-xs-12 input-lg form-control' placeholder='email@email.com'/>

        </div>

        <div className="form-group">

          <input type="password" name='password' onChange={this.onChangePassword} value={this.state.password} className='form-control col-xs-12 input-lg' placeholder='******'/>

        </div>

        <div className="form-group">

          <button onClick={() => autenticar(this.state.email, this.state.password)}
            className='col-xs-12 btn btn-primary btn-lg'>

            Autenticar

          </button>

        </div>

      </div>
    )

    const logoutForm = () => (
        <div className="panel-body">

          <div className="form-group">

            <p><span className='fa fa-fw fa-user'></span> <strong>{usuario['nome']}</strong></p>

          </div>

          <div className="form-group">

            <button className='btn btn-lg btn-info col-lg-12' onClick={() => logout()}>Sair</button>

          </div>

        </div>
    )


    return(

      <div className="panel panel-default">

        <div className="panel-heading">

          <h3>Login</h3>

        </div>

          <If test={!token}>
            {authLoginForm()}
          </If>

          <If test={token}>
            {logoutForm()}
          </If>

      </div>



    )
  }
}

const mapStateToProps = (state) => {
  return { token: state.login.token, usuario: state.login.user }
}
const mapDispatchToProps = ( dispatch ) => {
  return bindActionCreators({ autenticar, logout, validateToken }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
