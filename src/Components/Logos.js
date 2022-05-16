import React from 'react'
import './Logos.css'

function Logos(props) {
  return (
    <div>
        <a className='mainLink' href={props.link} target='_blank'>

        <div className="container_logos">
        <div class="img-cont">
            <img src={props.imgLink} width={42} alt="" srcset="" />
        </div>
        <div className="logo-title">
            {props.title}
        </div>
        </div>
        </a>
    </div>
  )
}

export default Logos