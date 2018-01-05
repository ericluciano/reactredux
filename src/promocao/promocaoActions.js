import axios from 'axios'
import { toastr } from 'react-redux-toastr'

import { URL_PROMOCAO } from '../constantes/const'
import { validateToken } from '../login/loginActions'

//mensagens
import { Messages } from '../msg/msg'

export const create = (values) => {

  return (dispatch, getState) => {

    const token = getState().login.token
    const promocao_id = getState().promocao.dados.id

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    
    axios.post(`${URL_PROMOCAO}/${promocao_id}`, values)
    .then(
      (resp) => {
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
      .catch( e =>
          swal({
            title:'Token!',
            text: Messages[e.response.data.error],
            type: 'warning'
          })
    )
    }
}

export const promocaoById = (promocao_id) => {

  return (dispatch, getState) => {
    const token = getState().login.token

    axios.get(`${URL_PROMOCAO}/${promocao_id}`)
    .then(resp => {
        dispatch([
            validateToken(token),
            { type: 'PROMOCAO_GET', 'payload': resp.data }
        ])
  })
    .catch(e => console.log(`Error : ${e.response.data}`))
  }
}

export const clearComponent = () => {
  return { type: 'PROMOCAO_CLEAR' }
}
