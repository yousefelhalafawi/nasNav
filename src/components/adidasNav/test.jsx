import React, { Component } from 'react';
import "./test.scss";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';

class Adidas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }
  componentDidMount() {
    axios.get('http://localhost:3001/cart')
      .then(response => {
        this.setState({ cartItems: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <>
        <header>
          <nav class="adidas-nav">
            <div class="adidas-logo">
              <Link to="/">
                <img src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dwb078dc0d/images/adidas_logo.svg" alt="Adidas Logo"/>
              </Link>
            </div>
            <ul class="adidas-nav-links">
              <li><a href="#">Men</a></li>
              <li><a href="#">Women</a></li>
              <li><a href="#">Kids</a></li>
              <li><a href="#">Sport</a></li>
              <li><a href="#">Brands</a></li>
              <li><a href="#">Release Dates</a></li>
              <li><a href="#">Sale</a></li>
            </ul>
            <div class="adidas-search">
              <input type="text" placeholder="Search"/>
              <button type="submit">Search</button>
            </div>
            <div class="adidas-cart">
              <Link to="/cart">
                <img src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw6e0f010d/images/bag%20empty.svg" alt="Cart"/>
                <span>{this.state.cartItems.length||0}</span>
              </Link>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default Adidas;
