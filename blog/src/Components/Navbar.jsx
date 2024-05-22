import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="main-container">
  {/* header section  */}
  <div className="header-group">
    <div className="header-inner">
      <div className="header-logo-adv-group">
        <div className="fmblog-logo">
          <img src="src/images/FM-logo.png" alt="" className="fmblog-img" />
        </div>
        <div className="adv-heading">Advertisment Space</div>
      </div>
      <div className="nav-bar">
        <a href="#" className="nav-link active">
          Home
        </a>
        <a href="#" className="nav-link">
          Presenter
        </a>
        <a href="#" className="nav-link">
          Artist
        </a>
        <a href="#" className="nav-link">
          Blogs
        </a>
        <a href="#" className="nav-link">
          Relationships
        </a>
        <a href="#" className="nav-link">
          Events
        </a>
        <a href="#" className="nav-link">
          contests
        </a>
        <a href="#" className="nav-link">
          Schedule
        </a>
        <a href="#" className="nav-link">
          Downloads
        </a>
        <a href="#" className="nav-link">
          Photos
        </a>
      </div>
    </div>
  </div>
</div>
  )
}

export default Navbar
