import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import MasterCard from './MasterCard';
import Footer from '../Components/Footer'

function Cards() {
  return (
    <>
    <div className='cards'>
      <div className='cards__container'>
      <h1>About our club</h1>
      <p>
      Code @ Amrita, Amrita Vishwa Vidyapeetham, Amritapuri is an official SIG of ACM.
       We at club aim to provide a platform for students to learn and grow their 
       competitive programming skills. We believe that the best way to learn is by 
       doing. Students in club are encouraged to participate in various events and 
       competitions and enhance their skills. Main objective of club is to make 
       students excel in data structures and algorithms. So that they can be a 
       part of the next generation of programmers. We believe every student can do 
       efficient programming with some help of the club. The club is a group of people
        who enjoy coding and help each other to learn.
      Our main motive is to make next generation programmers who solves real time problems 
      around the world in efficient manner.
      <br>
      </br>
      <br>
      </br>
      Club is under the guidance of Dr. Swaminathan J, who is the head of the club.
      <br>
      </br>
      <br>
      </br>
      </p>
            <MasterCard />
          <ul className='cards__items'>
          </ul>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/ds.png'
              text='Smart data structures and dumb code works a lot better than the other way around.'
              label='Data Structures'
              path='/'
              />
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/code.jpg'
              text='An algorithm is like a recipe for a computer to follow. Learn good recipe'
              label='Algorithms'
              path='/'
              />
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/timecomp.png'
              text='Talk is cheap. Show me the code.'
              label='Time Complexity'
              path='/'
              />
          </ul>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default Cards;
