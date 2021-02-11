import React from 'react'
import Logo from './images/Banner2.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <img className="navbar-brand" src={Logo} alt="Logo" width="80px"/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#banner">Banner</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cards">Cards</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#table">Table</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#modal">Modal</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#form">Form</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer">Footer</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
