import React from 'react'

const Header = ({isScrolled}) =>
  (
    <header id="header" className={isScrolled ? 'header-scrolled' : ''}>
      <div className="container">
        <div className="row align-items-center justify-content-between d-flex">
          <div id="logo">
            <a href="index.html"><img src="img/logo.png"/></a>
          </div>
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className="menu-active"><a href="">Home</a></li>
              <li><a href="#blog">blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          {/* #nav-menu-container */}
        </div>
      </div>
    </header>
  )

export default Header
