import React from 'react';
import axios from 'axios';
import './CartComp.scss';

class CartComp extends React.Component {
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
      <div className="cart">
        <h2>Your Cart</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.cartItems.length === 0 ? (
              <tr>
                <td colSpan="3">Your cart is empty.</td>
              </tr>
            ) : (
              Object.values(this.state.cartItems.reduce((acc, cartItem) => {
                if (acc[cartItem.title]) {
                  acc[cartItem.title].quantity += 1;
                } else {
                  acc[cartItem.title] = {
                    ...cartItem,
                    quantity: 1
                  };
                }
                return acc;
              }, {})).map((cartItem) => (
                <tr key={cartItem.id}>
                  <td>{cartItem.title}</td>
                  <td>${cartItem.price.toFixed(2)}</td>
                  <td>{cartItem.quantity}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CartComp;
