import React from 'react'

function Upcomingcards(props) {
  return (
    <div>
        <div class = "bordercss">
            <div class="rowcss">
                <div class="columncss">
                    <div class="cardcss">
                        <img src={props.src} class="imagecss" />
                        <div class="containercss">
                            <div class="overlaycss">
                                <h4>{props.head}</h4>
                                <p>{props.des}</p>
                                <p><a href={props.link} target='_blank'><button class="buttoncss">Participate</button></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Upcomingcards