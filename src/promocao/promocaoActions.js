import axios from 'axios'
import { toastr } from 'react-redux-toastr'

import { URL_PROMOCAO } from '../constantes/const'

export const create = (values) => {


  return (dispatch, getState) => {

    const token = getState().login.token
    const promocao_id = getState().promocao.dados.id

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

    axios.post(`${URL_PROMOCAO}/${promocao_id}`, {values})
      .then(resp => {

        if(resp.data.type == 'usuario_participando_promocao'){
          toastr.info(resp.data.message)
        }else{
          toastr.success(resp.data.message)
        }


        dispatch({
          type: 'SEND_RESPOSTAS',
          payload: ''
        })
      })
      .catch(err => toastr.error('erro ' + err.response.data.error))

    }

}

export const promocaoById = (promocao_id) => {
  console.log('Chamou ${promocao_id}')
  return (dispatch) => {

    axios.get(`${URL_PROMOCAO}/${promocao_id}`)
    .then(resp => dispatch({ type: 'PROMOCAO_GET', 'payload': resp.data }))
    .catch(err => console.log(`Error : ${err.response.data}`))
  }
}
