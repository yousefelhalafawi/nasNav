import React, {  } from 'react';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

import "./products.scss";


class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    this.handleAddClick = this.handleAddClick.bind(this);

  }

  componentDidMount() {
    axios.get('https://dummyjson.com/products')
      .then(res => this.setState({ data: res.data.products }))
      .catch(err => console.log(err));
  }


  handleAddClick(product) {
    product.id=uuidv4();
    axios
    .post('http://localhost:3001/cart', product)
    .then((response) => {
      console.log(response);
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
      alert('Error adding post!');
    });
  }


  render() {
    const { data } = this.state;
    return (
      <div className="products-container">
        {data ? (
          <div className="card-container">
            {data.map((product) => (
              <div className="card" key={product.id} >
                  <Link to={`/product/${product.id}`} className="link">
                <img className="card-img-top" src={product.thumbnail} alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.price}$</p>
                  {/* <button onClick={() => this.handleAddClick(product)} className="btn">Add to Cart</button> */}
                </div>
              </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="loading">Loading......</div>
        )}
      </div>
    );
  }
}

export default Products;
