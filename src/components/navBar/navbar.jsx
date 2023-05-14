import React, { Component } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Navbar extends Component {
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
      <nav className="navbar">
        <div className="navbar__brand">
          <img src="/images/download.png" alt="Logo" />
        </div>
        <div className="navbar__links">
          <Link to="/" className="navbar__button">Home</Link>
          <Link to="/cart" className="navbar__button">
            Cart
            <span className="badge">{this.state.cartItems.length}</span>

          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
