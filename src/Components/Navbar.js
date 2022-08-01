import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import acmlogo from '../svg/acmlogo.png'

function Navbar() {
  return (
    <> 
    <header>
    <nav className="navbar navbar-dark navbar-expand-md bg-dark text-capitalize fs-5 fw-normal custom-header">
      <div className='container-fluid'> 
        <div>
          <Link className="navbar-brand" to='/'  style={styleNavbar}>Code@Amrita</Link>
          <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbar-collapse">
            <span className="visually-hidden" style={styleSpan}>Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbar-collapse">
          <ul className="navbar-nav links">
            <li className="nav-item">
            <Link className='nav-link' to='/members'>Members</Link>
            </li>
            <li className="nav-item">
            <Link className='nav-link' to='/resources'>Resources</Link>
            </li>
            <li className="nav-item">
            <Link className='nav-link' to='/why'>Why join us?</Link>
            </li>
            <li className="nav-item">
            <Link className='nav-link' to='/upev'>Upcoming Events!</Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto"></ul>
        </div>
        <a href='https://aseam.acm.org/' target='_blank'>
        <img src={acmlogo} alt="ACM" className="acmlogo" width={162} />
        </a>
      </div>
    </nav>
    </header>
    </>
  )
}
const styleNavbar = {
  color : "var(--bs-gray-200)",background: "var(--bs-body-color)",paddingLeft: "7px"
}
const styleSpan = {
  fontSize: "20px"
}
export default Navbar