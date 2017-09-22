
export const changeTest = (dado) => {

  return {
    type: 'TEST1_ACTION',
    payload: dado
  }

}

export const clearState = () => {
  return {
    type: 'TEST1_CLEAR'    
  }
}
