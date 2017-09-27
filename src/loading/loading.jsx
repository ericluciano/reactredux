import React from 'react'
import If from '../operators/If'

export default (props) => (
  <If test={!props.loading}>
  <div className="row">
    <div className="col-lg-12">
        <center>
          <img src={props.url_image} alt="Carregando"/>
        </center>
    </div>
  </div>
</If>
)
