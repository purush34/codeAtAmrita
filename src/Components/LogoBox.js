import React from 'react'
import Footer from './Footer'
import Logos from './Logos'

function LogoBox() {
  return (
    <div className='cards'>
      <div className='cards__container'>
      <h1>Start coding now</h1>
          <h2>Competete at</h2>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <Logos imgLink="https://codeforces.org/s/0/favicon-96x96.png" title='Codeforces'
            link='https://www.codeforces.com' />

            <Logos imgLink="https://www.stopstalk.com/stopstalk/static/images/codechef_logo.png" title='Codechef'
            link='https://www.codechef.com/' />

            <Logos imgLink="https://img.atcoder.jp/assets/favicon.png" title='Atcoder'
            link='https://atcoder.jp/' />

            <Logos imgLink="https://static-fastly.hackerearth.com/newton/production/static/images/common/favicon.png" title='HackerEarth'
            link='https://www.hackerearth.com/' />
            
        </ul>
        <ul className='cards__items'>
            <Logos imgLink="https://stx1.spoj.com/gfx/favicon_new.png" title='Spoj'
            link='https://www.spoj.com/' />

            <Logos imgLink="https://www.hackerrank.com/wp-content/uploads/2020/05/hackerrank_cursor_favicon_480px-150x150.png" title='HackerRank'
            link='https://www.hackerrank.com/' />

            <Logos imgLink="https://projecteuler.net/favicons/apple-touch-icon.png" title='Project Euler'
            link='https://projecteuler.net/' />

            <Logos imgLink="https://assets.leetcode.com/static_assets/public/icons/apple-touch-icon-114x114.png" title='Leet Code'
            link='https://leetcode.com/' />
            
        </ul>
        </div>
          <h2>Learn algorithms at</h2>
        <ul className='cards__items'>
            <Logos imgLink="https://cp-algorithms.com/favicon.ico" title='CP Algorithms'
            link='https://cp-algorithms.com/' />

            <Logos imgLink="https://visualgo.net/img/favicon.png" title='Visusal go'
            link='https://visualgo.net/' />

            <Logos imgLink="https://www.cs.usfca.edu/~galles/visualization/favicon.ico" title='DSA Visualiser'
            link='https://www.cs.usfca.edu/~galles/visualization/Algorithms.html' />

            <Logos imgLink="https://media.geeksforgeeks.org/img-practice/favicon-1600291663.png" title='Geeks for Geeks'
            link='https://practice.geeksforgeeks.org/' />
            
        </ul>
            <h2>Create</h2>
        <ul className='cards__items'>
            <Logos imgLink="https://github.githubassets.com/favicons/favicon.png" title='Github'
            link='https://github.com/' />

            <Logos imgLink="https://github.githubassets.com/favicons/favicon.png" title='Student pack'
            link='https://education.github.com/pack' />

            <Logos imgLink="https://www.stopstalk.com/stopstalk/static/images/fav_assets/favicon-96x96.png" title='StopStalk'
            link='https://www.stopstalk.com/' />
            
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default LogoBox