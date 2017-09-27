import React from 'react'

export default (props) => (
    <div className='form-group'>
      <label>{props.texto}</label>
      <textarea {...props.input} name={props.valor} id={props.valor} cols="30" rows="10" className='form-control'></textarea>
    </div>
  )
