import React from 'react'


function WhyCards(props) {
  return (
    <div>
        <div class="container" style={{backgroundColor : props.color} }>
        <div class="imgFeild">
            <img  src={props.src} alt="" />
        </div>
        <div class="textFeild">
            <p>
                {props.text}
            </p>
        </div>
    </div>
    </div>
  )
}
export default WhyCards