const tokenKey = 'appXs'

const INITIAL_STATE = {
  user: [], token: localStorage.getItem(tokenKey), tokenValid: false
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
      case 'LOGIN_AUTH_FETCH_USER':
        return {...state, user: action.payload}

      case 'LOGIN_AUTH_SUCCESS':
        //localStorage.setItem(tokenKey, JSON.stringify(action.payload.access_token))
        localStorage.setItem(tokenKey, action.payload.access_token)
        return { ...state, token: action.payload.access_token, tokenValid:true }

      case 'LOGOUT_SUCCESS':
        localStorage.removeItem(tokenKey)
        return { ...state, token: '', tokenValid:false}

      case 'TOKEN_VALID':
      //user: action.payload.user,
        return { ...state, token: action.payload.token, tokenValid: true}

      case 'TOKEN_INVALID':
        localStorage.removeItem(tokenKey)
        return { ...state, user: '', token: '', tokenValid: false}

      default:
        return state

  }
}
