import React from 'react'
import { Link } from 'react-router-dom'
import { List } from '../styles/NavbarStyle'

const Navigation = () => {
  return (
    <div>
        {/* <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link> */}
        <nav className="px-3 navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>CRUD APPLICATION</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <List className="nav-item">
        <Link to='/'>Home</Link>
        </List>
        <List className="nav-item">
        <Link to='/about'>About</Link>
        </List>
        <List className="nav-item">
        <Link to='/contact'>Contact</Link>
        </List>
        
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navigation