import React from 'react'
import Footer from './Footer'
// import './WhyClub.css'
import './WhyCards.css'
import WhyCards from './WhyCards'

function WhyClub() {
  return (
    <div className='cards'>
      <div className='cards__container'>
      <h1>Why join Code@Amrita</h1>
          <h2>Learn together</h2>
          <WhyCards src='https://blog.vantagecircle.com/content/images/size/w600/2020/08/teamwork-and-team-building.png' 
          text='Meet co-programmers and senior programmers at club.Get started by having some tips.
          ' 
          color='#dcda45'
          />
          
          <WhyCards src='https://previews.123rf.com/images/genestro/genestro1904/genestro190400022/123175316-office-work-team-teamwork-and-communication-between-co-workers-friendly-environment-for-productivity.jpg' 
          text='Enhance your coding skills by sharing tiny hacks.Learn new hacks day by day.' color='orange'
          />

          <WhyCards src='https://dailytechtime.com/wp-content/uploads/2020/04/Lead-A-Testing-Team.jpg' 
          text='Participate in coding competitions together.Get the vibe of competetion at the club.' color='#A245d9'
          />

          <WhyCards src='https://us.123rf.com/450wm/venimo/venimo1810/venimo181000040/112689930-vector-illustration-in-flat-simple-style-with-characters-app-and-software-development-people-working.jpg' 
          text='Discuss and discover the new ways of writing code efficiently in different languages.' color='#cb5cd6'
          />
          
          <WhyCards src='https://blog.vantagecircle.com/content/images/2019/03/The-Modern-Rules-for-Teamwork-in-the-Workplace.png' 
          text='Get to be around people having common interests.Observe the different approaches.' color='#dc45a3'
          />
          
          <WhyCards src='https://cdn2.hubspot.net/hubfs/4722110/Online%20Teaching%20-%20Blog%20Cover%20Image.png' 
          text='Have advanced DSA sessions with Dr. Swaminathan J. sir frequently.' color='#dcf563'
          />
            <h2 className='joinUs'><a href='#'>Join us</a></h2>
      </div>
      <Footer />
    </div>
  )
}

export default WhyClub