import React from 'react'
import Footer from './Footer'
// import './WhyClub.css'
import './WhyCards.css'
import WhyCards from './WhyCards'

function Upcoming() {
  return (
    <div className='cards'>
      <div className='cards__container'>
      <h1>Upcoming Events</h1>

          <WhyCards src='https://codeforces.com/predownloaded/54/8a/548a369b1a954b2f7f9133072a025435c8667aac.png' 
          text='Coming Event' color='#A245d9'
          />

          <WhyCards src='https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Codechef%28new%29_logo.svg/1200px-Codechef%28new%29_logo.svg.png' 
          text='Coming Event' color='#cb5cd6'
          />
          
          <WhyCards src='https://image-prod.kigyolog.com/contents/company/e25ef931a2726cc0bbbc4f41cbdb32e0.jpg' 
          text='Coming Event' color='#dc45a3'
          />
          
          <WhyCards src='https://cdn-images-1.medium.com/max/2600/1*UGT1Rh9xLww3JeIDR1F0RQ.png' 
          text='Coming Event' color='#dcf563'
          />
          
      </div>
      <Footer />
    </div>
  )
}

export default Upcoming