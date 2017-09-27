import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { browserHistory } from 'react-router'
//constantes
import { URL_LOGIN, URL_VALIDATE_TOKEN } from '../constantes/const'
//mensagens
import { Messages } from '../msg/msg'

export const autenticar = (email, password) => {
  return (dispatch) => {
    axios.post( URL_LOGIN, { email, password } )
          .then( resp => {

                toastr.success('','Login realizado com sucesso.')

                  dispatch({
                    type: 'LOGIN_AUTH_SUCCESS',
                    payload: resp.data
                  })

          })
          .catch(error => {

                toastr.error('Erro', error.response.data['message'])

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

                dispatch({
                  type: 'TOKEN_VALID',
                  payload: resp.data
                },{
                  type: 'LOGIN_AUTH_FETCH_USER',
                  payload: resp.data.user
                })
            }
          )
          .catch(
            (error) => {
              let error_type = error.response.data.type

                toastr.warning( Messages[error_type] )

                dispatch({
                    type: 'TOKEN_INVALID',
                    payload: ''
                })
            }
          )
  }
}
