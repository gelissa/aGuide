import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'

const Navbar = () => {
    return (
      <nav className="nav justify-content-center nav-masthead">
        <Link to="/home" className="nav-link m-1">Home</Link>
        <Link to="/resources" className="nav-link m-1">Resources</Link>
        <Link to="/donations"className="nav-link m-1">Donations</Link>
        <Link to="/guides" className="nav-link m-1">Guides</Link>
      </nav>
    );
  };
  
  export default Navbar