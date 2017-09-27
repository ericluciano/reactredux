const INITIAL_STATE = {
  dados: [], loading : false
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
      case 'PROMOCAO_SEND_RESP':
        return { ...state }

      case 'PROMOCAO_GET':
        return { ...state, dados: action.payload, loading:true }

      case 'PROMOCAO_CLEAR':
          return { ...state, loading: false }
      default:
        return state

  }
}
