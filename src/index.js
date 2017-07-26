import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,
        Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import NavigationBar from './components/NavigationBar';
import App from './WebApp/App';
import ChatApp from './Chatter/ChatApp';
import ShoppingCart from './ShoppingCart/App'
import Cart from './ShoppingCart/Cart';
import Products from './ShoppingCart/Products';


const Home = () => {
  return (
    <div>
      <h3> Hello from Home </h3>
    </div>
  )
}

ReactDOM.render((
  <Router>
    <div>
      <NavigationBar />
      <div className="container">
        <Route exact path="/" component={Home}/>
        <Route path="/i-do-what-i-want" component={App}/>
        <Route path="/fake-chat" component={ChatApp}/>
          <Switch>
            <Route exact path="/shop" component={ShoppingCart} />
            <Route path="/shop/cart" render={Cart}/>
            <Route path="/shop/products" component={Products}/>
          </Switch>
      </div>
    </div>
  </Router>
), document.getElementById('root'));
