import React from 'react';

import './Navbar.css'

function Navbar () {

  return (
    <section className="navbar">
      <a href="/" className="navbar-item">Game</a>
      <a href="/Exclusive Game" className="navbar-item">Exclusive Game</a>
      <a href="/about" className="navbar-item">About</a>
      <a href="/contact" className="navbar-item">Contact</a>
  </section>
  )

}

export default Navbar;