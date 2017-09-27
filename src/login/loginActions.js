import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { swall, close } from 'react-redux-sweetalert'

import { browserHistory } from 'react-router'
//constantes
import { URL_LOGIN, URL_VALIDATE_TOKEN } from '../constantes/const'
//mensagens
import { Messages } from '../msg/msg'

export const autenticar = (email, password) => {
  return (dispatch, getState) => {

    axios.post( URL_LOGIN, { email, password } )
    .then( resp => {

          toastr.success('','Login realizado com sucesso.')

            dispatch([{
              type: 'LOGIN_AUTH_SUCCESS',
              payload: resp.data
            }, validateToken(resp.data.access_token)])

    })
    .catch(e => {

          //toastr.e('Erro', e.response.data['message'])

          swal({
                title:'Erro!',
                text: e.response.data['message'],
                type: 'error'
          })

          dispatch({
            type: 'LOGIN_AUTH_ERROR',
            payload: ''
          })

    })
  }
}

export const redirect = () => {
  browserHistory.push('/promocao')
}

export const logout = () => {
  toastr.success( Messages.logout )
  return {
    type: 'LOGOUT_SUCCESS',
    payload: ''
  }
}

export const validateToken = (token) => {

  const vToken = token || 'semToken'
  const URL_TOKEN = `${URL_VALIDATE_TOKEN}?token=${vToken}`

  return (dispatch) => {
          axios.get(URL_TOKEN)
          .then(
            (resp) => {

                dispatch([{
                  type: 'TOKEN_VALID',
                  payload: resp.data
                },{
                  type: 'LOGIN_AUTH_FETCH_USER',
                  payload: resp.data.user
                }])
            }
          )
          .catch(
            (e) => {
              let e_type = e.response.data.type

                //toastr.warning( Messages[e_type] )
                swal({
                      title:'Sessão expirada.',
                      text: Messages[e_type],
                      type: 'warning'
                })

                dispatch({
                    type: 'TOKEN_INVALID',
                    payload: ''
                })
            }
          )
  }
}
