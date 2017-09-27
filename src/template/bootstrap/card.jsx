import React from 'react'

import { Link } from 'react-router'

export default (props) => (
        <div className="card">

        <Link to={props.link}>
          <img className="card-img-top" src={props.image} />
        </Link>

        <div className="card-block">
          <h5 className="text-bold">{props.name}</h5>
          <div dangerouslySetInnerHTML={{__html: props.text}}></div>


        </div>

      </div>

)
