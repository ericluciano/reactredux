import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { browserHistory } from 'react-router'

const URL_LOGIN = 'http://localhost:8000/api/login'
const URL_VALIDATE_TOKEN = 'http://localhost:8000/api/validateToken'

export const autenticar = (email, password) => {
  console.log(`Email: ${email}, Password: ${password}`)

  return (dispatch) => {
    axios.post(URL_LOGIN, { email, password} )
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
  toastr.success('Sucesso', 'Logout efetuado com sucesso.')
  return {
    type: 'LOGOUT_SUCCESS',
    payload: ''
  }
}

export const validateToken = (token) => {
  const URL_TOKEN = `${URL_VALIDATE_TOKEN}?token=${token}`
  return (dispatch) => {

          axios.get(URL_TOKEN)
          .then( (resp) => {
                dispatch({
                  type: 'TOKEN_VALID',
                  payload: resp.data
                })
                dispatch({
                  type: 'LOGIN_AUTH_FETCH_USER',
                  payload: resp.data.user
                })
        }
        )
        .catch( (error) =>{
        toastr.warning('','Sessão expirada')
        return dispatch({
            type: 'TOKEN_INVALID',
            payload: ''
          })
        }
        )
  }
}
