import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toastr } from 'react-redux-toastr'

import { validateToken } from '../login/loginActions'

import Grid from '../template/bootstrap/grid'

import axios from 'axios'

import Card from '../template/bootstrap/card'

class Promocao extends Component{
  constructor(props){
		super(props)

    this.state = { list: [], token: '' }
  }

  componentWillMount(){
    console.log('DIDMOUNT '+ this.props.token)
    if(!this.props.token)
      toastr.info('Para participar das promoções, você tem que estar autenticado.')

    axios.get('http://localhost:8000/api/promocoes')
    .then(resp => this.setState({list: resp.data }))
  }

  componentDidMount(){
    console.log('DIDMOUNT2 '+ this.props.token)
    if(!this.props.token)
      toastr.info('Para participar das promoções, você tem que estar autenticado.')
  }

  render(){
    const url_image = 'http://mixriofm.uol.com.br/uploads/'
    const url_promo_id = '/promocao/'
    return(
      <div>
        <div className="row">
          <div className="col-lg-12">
            <h1>Promoções</h1>
            <hr/>
          </div>
        </div>
        <div className='row'>
          {this.state.list.map(item => (
              <Grid cols="12 4 3" key={item.id}>
                <Card id={item.id} link={url_promo_id + item.id} image={url_image + item.imagem} name={item.nome} text={item.resumo} />
              </Grid>

          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ( state ) => {
  return { token: state.login.token }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ validateToken }, dispatch)
}

//decorator
export default connect(mapStateToProps, mapDispatchToProps)(Promocao)
