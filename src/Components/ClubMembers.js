import React from 'react';
import CardItem from './CardItem';
import Footer from '../Components/Footer'
import './ClubMembers.css'
// import imgPrototype from ''

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
      <h1>Feautured programmers at club</h1>
          <h2>Alumni</h2>
        <div className='cards__wrapper' >
          <ul className='cards__items'>
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/dharani.png'
              text='Dhulipalla Dharani  AM.EN.U4CSE19218'
              label='2019-23'
              path='/services'
            />
            {/* <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            /> */}
            {/* <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            /> */}
          </ul>
        </div>
        <h2>Interns</h2>
        <div className='cards__wrapper' >
          <ul className='cards__items'>
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/dharani.png'
              text='Dhulipalla Dharani  AM.EN.U4CSE19218'
              label='2019-23'
              path='/'
            />
          </ul>
        </div>
          <h2>Members</h2>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/abinandarun.jpg'
              text='Abhinand Arun  AM.EN.U4CSE20201'
              label='2020-24'
              path='https://www.stopstalk.com/user/profile/abhinandarun02'
            />
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/abinandarun.jpg'
              text='Abhinand Arun  AM.EN.U4CSE20201'
              label='2020-24'
              path='https://www.stopstalk.com/user/profile/abhinandarun02'
            />
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/abinandarun.jpg'
              text='Abhinand Arun  AM.EN.U4CSE20201'
              label='2020-24'
              path='https://www.stopstalk.com/user/profile/abhinandarun02'
            />
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/abinandarun.jpg'
              text='Abhinand Arun  AM.EN.U4CSE20201'
              label='2020-24'
              path='https://www.stopstalk.com/user/profile/abhinandarun02'
            />
          </ul>
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/purush.jpeg'
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/services'
            />
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/purush.jpeg'
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/services'
            />
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/purush.jpeg'
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/services'
            />
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/purush.jpeg'
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/services'
            />
          </ul>
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/purush.jpeg'
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/services'
            />
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/purush.jpeg'
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/services'
            />
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/purush.jpeg'
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/services'
            />
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/purush.jpeg'
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/services'
            />
          </ul>
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/purush.jpeg'
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/services'
            />
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/purush.jpeg'
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/services'
            />
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/purush.jpeg'
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/services'
            />
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/purush.jpeg'
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/services'
            />
          </ul>
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/purush.jpeg'
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/services'
            />
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/purush.jpeg'
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/services'
            />
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/purush.jpeg'
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/services'
            />
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/purush.jpeg'
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/services'
            />
          </ul>
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/purush.jpeg'
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/services'
            />
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/purush.jpeg'
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/services'
            />
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/purush.jpeg'
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/services'
            />
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/purush.jpeg'
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/services'
            />
          </ul>
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/purush.jpeg'
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/services'
            />
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/purush.jpeg'
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/services'
            />
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/purush.jpeg'
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/services'
            />
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/purush.jpeg'
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/services'
            />
          </ul>
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/purush.jpeg'
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/services'
            />
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/purush.jpeg'
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/services'
            />
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/purush.jpeg'
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/services'
            />
            <CardItem
              src='https://raw.githubusercontent.com/purush34/codeAtAmrita/main/public/images/Members/purush.jpeg'
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/services'
            />
          </ul>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cards;
