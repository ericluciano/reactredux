import React from 'react'
import { Link } from 'react-router'

export default (props) => (
  <ul>
    <li>
      <Link to='login'>Login</Link>
    </li>
    <li>
      <Link to='promocao'>Promocao</Link>
    </li>
    <li>
      <Link to='/'>Home</Link>
    </li>
  </ul>
)
