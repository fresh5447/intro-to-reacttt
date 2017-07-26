import React from 'react';

const NavBar = (props) => {
  return (
    <div className="nav">
      <ul className="nav-container">
      {
        props.navItems.map((link) => {
          return <li> {link} </li>
        })
      }
      </ul>
    </div>
  )
}

export default NavBar;
