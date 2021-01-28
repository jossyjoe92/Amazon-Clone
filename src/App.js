import React, {useEffect} from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Checkout from './Components/Checkout/Checkout'
import Login from './Components/Login/Login'
import Payment from './Components/Payment/Payment.js'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Products from './Components/Products/products';

const promise = loadStripe('key');
const App = () => {

  useEffect(() => {
   //use local storage here
  }, [])
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/products">
            <Header />
            <Products />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            
          </Route>
          <Route path="/login">
           <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;