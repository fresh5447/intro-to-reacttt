import React from 'react'
import {Link} from 'react-router-dom';

const CartNav = () => {
  return (
    <div className="navbar navbar-default">
      <ul className="container-fluid">
        <li> <Link to="/shop/products"> Products </Link> </li>
        <li> <Link to="/shop/cart"> Cart </Link></li>
        <li> <Link to="/shop"> Home </Link></li>
      </ul>
    </div>
  )
}

class App extends React.Component {
  render(){
    return (
      <div>
        <CartNav/>
        <h1> I am header! </h1>
      </div>
    )
  }
}

export default App
