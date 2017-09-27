import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { browserHistory } from 'react-router'
import {reduxForm, Field } from 'redux-form'

import { create, promocaoById } from './promocaoActions'

import Grid from '../template/bootstrap/grid'

import axios from 'axios'

const URL_PROMO_ID = 'http://localhost:8000/api/promocoes/'

class Promocao extends Component{
  constructor(props){
		super(props)

    //this.state = { list: [], promo_id: '' }

    this.props.promocaoById(this.props.params.promo_id)
  }

  componentWillReceiveProps(){

  }

  componentWillMount(){
    if(this.props.params.promo_id == undefined)
      browserHistory.push('/promocao')

    // this.setState({ promo_id: this.props.params.promo_id })
    // let URL = `${URL_PROMO_ID}${this.props.params.promo_id}`
    //
    // axios.get(URL)
    // .then(resp => this.setState({list: resp.data }))
    this.props.promocaoById(this.props.params.promo_id)
  }


  render(){

    const { handleSubmit, list } = this.props
    //console.log(handleSubmit)
    const url_image = 'http://mixriofm.uol.com.br/uploads/'
    const url_promo_id = '/promocao/'
    console.log(this.props.list)


    const componentByType = (props) => {
      let item = props.perguntas || []
      return item.map((item) => {
        if(item.tipo == 'input'){
          return (
            // <Input key={item.id} texto={item.texto} valor={item.valor} />
            <div className="form-group" key={item.id}>
              <Field name={item.valor} component='input' className='form-control input-md'/>
            </div>
          )
        }

        if(item.tipo == 'textarea'){
          return (
            <div className="form-group" key={item.id}>
              <Field name={item.valor} component='textarea' className='form-control input-md'/>
            </div>
          )
        }
      })


    }
    return(
      <div>
        <div className="row">
          <div className="col-lg-12">
            <h1>Promoções - {list.nome}</h1>
            <hr/>
          </div>
        </div>
        <div className='row'>
          <Grid cols="12 8 8">

              <div className="card">
                <img className="card-img-top" src={url_image + list.imagem} />


                <div className="card-block">
                  <h5 className="text-bold">{list.nome}</h5>
                  <div dangerouslySetInnerHTML={{__html: list.texto}}>
                  </div>
                  <form role='form' name='form' id='form' onSubmit={handleSubmit(this.props.create)}>
                  {componentByType(list)}
                    <button type='submit' className='btn btn-primary btn-lg'>Participar</button>
                  </form>
                </div>

              </div>

          </Grid>
        </div>
      </div>



    )
  }
}

const mapStateToProps = ( state ) => {
  return { token: state.login.token, list: state.promocao.dados  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ create, promocaoById }, dispatch)
}

let promocaoForm = reduxForm({form: 'formParticipar'})(Promocao)
//decorator
export default connect(mapStateToProps, mapDispatchToProps)(promocaoForm)
