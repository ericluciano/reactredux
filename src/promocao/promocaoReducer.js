const INITIAL_STATE = {
  dados: []
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
      case 'PROMOCAO_SEND_RESP':
        return { ...state }

      case 'PROMOCAO_GET':
        return { ...state, dados: action.payload }
      default:
        return state

  }
}
