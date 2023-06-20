import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <section id="header">
        <Link to="/"><img src="assets/img/logo.png" alt=""/></Link>
        <div>
            <ul id="navbar" className={isNavOpen ? 'active' : ''}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/shop">Shop</NavLink></li>
                <li><NavLink to="/blogs">Blog</NavLink></li>
                <li><NavLink to="about-us">About</NavLink></li>
                <li><NavLink to="/contact">Conatct</NavLink></li>
                <li id="lg-bag">
                  <Link to="/cart"><i className="far fa-shopping-bag bag"></i></Link>
                  <span className="badge">1</span>
                  </li>
                <a onClick={() => setIsNavOpen(false) }><i id="close" className="far fa-times"></i></a>
            </ul>
        </div>
        <div id="mobile">
            <Link to="/cart"><i className="far fa-shopping-bag"></i></Link>
            <span className="badge">1</span>
            <i id="bar" onClick={() => setIsNavOpen(true) } className="far fa-outdent"></i>
        </div>
    </section>
  )
}

export default Header
