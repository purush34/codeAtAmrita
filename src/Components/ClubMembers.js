import React from 'react';
import CardItem from './CardItem';
import Footer from '../Components/Footer'
import './ClubMembers.css'
import imgPrototype from '../svg/toBeUpdated.jpg'

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
      <h1>Feautured programmers at club</h1>
          <h2>Alumni</h2>
        <div className='cards__wrapper' >
          <ul className='cards__items'>
            <CardItem
              src={imgPrototype}
              text='Dhulipalla Dharani  AM.EN.U4CSE19218'
              label='2019-23'
              path='/services'
            />
            <CardItem
              src={imgPrototype}
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/'
            />
            <CardItem
              src={imgPrototype}
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/'
            />
            <CardItem
              src={imgPrototype}
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/'
            />
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
              src={imgPrototype}
              text='Sai Karthik	AM.EN.U4AIE20001'
              label='2020-24'
              path='https://www.stopstalk.com/user/profile/abhinandarun02'
            />
            <CardItem
              src={imgPrototype}
              text='Dhanush Krishna R	AM.EN.U4AIE20021'
              label='2020-24'
              path='https://www.stopstalk.com/user/profile/abhinandarun02'
            />
            <CardItem
              src={imgPrototype}
              text='Ravi Theja	AM.EN.U4EEE20143'
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
              path='/'
            />
            <CardItem
              src={imgPrototype}
              text='Sudeep Sampath	AM.EN.U4EEE20154'
              label='2020-24'
              path='/'
            />
            <CardItem
              src={imgPrototype}
              text='T Vignesh	AM.EN.U4EEE20169'
              label='2020-24'
              path='/'
            />
            <CardItem
              src={imgPrototype}
              text='Kaushal	AM.EN.U4EEE20164'
              label='2020-24'
              path='/'
            />
          </ul>
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src={imgPrototype}
              text='N.MONEESH	AM.EN.U4AIE20150'
              label='2020-24'
              path='/'
            />
          <CardItem
              src={imgPrototype}
              text='Siddharth Maurya	AM.EN.U4CSE20266'
              label='2020-24'
              path='/'
            />
          <CardItem
              src={imgPrototype}
              text='Vishaal S Upot	AM.EN.U4CSE20276'
              label='2020-24'
              path='/'
            />
          <CardItem
              src={imgPrototype}
              text='Dilip Pushadap	AM.EN.U4CSE20322'
              label='2020-24'
              path='/'
            />
            
          </ul>
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src={imgPrototype}
              text='V Anand Ram	AM.EN.U4AIE20072'
              label='2020-24'
              path='/'
            />
          <CardItem
              src={imgPrototype}
              text='Yadhu Krishna p 	AM.EN.U4AIE20076'
              label='2020-24'
              path='/'
            />
          <CardItem
              src={imgPrototype}
              text='Gandham Sai Ram Pavan	AM.ENU4AIE20125'
              label='2020-24'
              path='/'
            />
          <CardItem
              src={imgPrototype}
              text='Aswin Babu	AM.EN.U4CSE20213'
              label='2020-24'
              path='/'
            />
            
          </ul>
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src={imgPrototype}
              text='Prabath V Kini	AM.EN.U4CSE20255'
              label='2020-24'
              path='/'
            />
          <CardItem
              src={imgPrototype}
              text='Rahul P Nair 	AM EN.U4CSE20259'
              label='2020-24'
              path='/'
            />
          <CardItem
              src={imgPrototype}
              text='Sharan J	AM.EN.U4CSE20265'
              label='2020-24'
              path='/'
            />
          <CardItem
              src={imgPrototype}
              text='Prasanth Kumar N	AM.EN.U4CSE20352'
              label='2020-24'
              path='/'
            />
            
          </ul>
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src={imgPrototype}
              text='SREESANKAR S	AM.EN.U4CSE20366'
              label='2020-24'
              path='/'
            />
          <CardItem
              src={imgPrototype}
              text='Manikanta	AM.EN.U4CSE20370'
              label='2020-24'
              path='/'
            />
          <CardItem
              src={imgPrototype}
              text='Varun Krishna Jyothis	AM.EN.U4EEE20051'
              label='2020-24'
              path='/'
            />
          <CardItem
              src={imgPrototype}
              text='Dhruv V S	AM.EN.U4AIE20022'
              label='2020-24'
              path='/'
            />
            
          </ul>
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src={imgPrototype}
              text='N.MONEESH	AM.EN.U4AIE20150'
              label='2020-24'
              path='/'
            />
          <CardItem
              src={imgPrototype}
              text='KUCHARLAPATI AKSH VARMA	AM.EN.U4AIE20141'
              label='2020-24'
              path='/'
            />
          <CardItem
              src={imgPrototype}
              text='Maddala H S M Krishna Karthik	AM.EN.U4AIE20046'
              label='2020-24'
              path='/'
            />
          <CardItem
              src={imgPrototype}
              text='K Y Vamsi	AM.EN.U4AIE20039'
              label='2020-24'
              path='/'
            />
            
          </ul>
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src={imgPrototype}
              text='SISTA SAI SUBRAHMANYA MRINAAL	AM.EN.U4AIE20067'
              label='2020-24'
              path='/'
            />
          <CardItem
              src={imgPrototype}
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/'
            />
          <CardItem
              src={imgPrototype}
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/'
            />
          <CardItem
              src={imgPrototype}
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/'
            />
            
          </ul>
        </div>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src={imgPrototype}
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/'
            />
          <CardItem
              src={imgPrototype}
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/'
            />
          <CardItem
              src={imgPrototype}
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/'
            />
          <CardItem
              src={imgPrototype}
              text='Purushottam Reddy AM.EN.U4CSE20120'
              label='2020-24'
              path='/'
            />
            
          </ul>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}

export default Cards;
