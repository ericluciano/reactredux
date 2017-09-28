import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toastr } from 'react-redux-toastr'

import { validateToken } from '../login/loginActions'

import { URL_PROMOCAO, URL_UPLOADS, URL_LOADING } from '../constantes/const'


import Grid from '../template/bootstrap/grid'
import If from '../operators/If'

import axios from 'axios'

import Card from '../template/bootstrap/card'
import Loading from '../loading/loading'

class Promocao extends Component{
  constructor(props){
		super(props)

    this.state = { list: [], token: '', loading: false }
  }

  componentWillMount(){
    // if(!this.props.token)
    //   toastr.info('Para participar das promoções, você tem que estar autenticado.')

    axios.get(URL_PROMOCAO)
    .then(resp => this.setState({list: resp.data, loading:true }))
  }

  componentDidMount(){

    // if(!this.props.token)
    //   toastr.info('Para participar das promoções, você tem que estar autenticado.')
  }

  render(){
    const url_image = `${URL_UPLOADS}`
    const url_promo_id = '/promocao/'
    return(
      <div>
        <div className="row">
          <div className="col-lg-12">
            <h1>Promoções</h1>
            <hr/>
          </div>
        </div>
        <Loading url_image={`${URL_LOADING}`} loading={this.state.loading} />
        <div className='row'>
          {this.state.list.map(item => (
              <Grid cols="12 4 3" key={item.id}>
                <Card id={item.id} link={url_promo_id + item.id} image={`${url_image}/${item.imagem}`} name={item.nome} text={item.resumo} />
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
