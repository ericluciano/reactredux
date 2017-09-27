import React from 'react'

export default (props) => (
    <div className='form-group'>
      <label>{props.texto}</label>
      <input {...props.input} name={props.valor} id={props.valor} className='form-control input-md' required='required'/>
    </div>
  )
