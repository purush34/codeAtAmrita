import React from 'react'
import Img1 from '../svg/Instructor.jpg'
import './MasterCard.css'

function MasterCard() {
  return (
    <>
    <div className="blog-post">
        <div className="blog-post__img">
            <img src={Img1}  />
        </div>

        <div className="blog-post__info">
        <h1 className="blog-post__title">Instructor</h1>
            <div className="blog-post__date">
                <span>Dr. Swaminathan J.</span>
                <span>Associate Professor</span>
        </div>

        <p className="blog-post__text">
        Dr. Swaminathan J. is instructing many students to find their 
        way in the competitive programming at the code @ Amrita club (SIG)
         which is a part of Amrita Student Chapter popularly renown as ACM 
          club in Amrita School of Engineering, Amritapuri.
        </p>
        <a href="https://amrita.edu/faculty/swaminathanj/" target="_blank" className="blog-post__cta">Know more</a>
        </div>
    </div>
    </>
  )
}

export default MasterCard