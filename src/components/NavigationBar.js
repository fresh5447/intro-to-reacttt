import React from 'react';
import {Link} from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div className="navbar navbar-default">
      <ul className="container-fluid">
        <li> <Link to="/"> Home </Link> </li>
        <li> <Link to="/i-do-what-i-want"> Super App </Link> </li>
        <li> <Link to="/fake-chat"> Fake Chat </Link></li>
        <li> <Link to="/playground"> Intro To State </Link></li>
      </ul>
    </div>
  )
}

export default NavigationBar;
