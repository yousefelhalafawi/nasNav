import React, {  } from 'react';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import './product.scss'
import { Link } from 'react-router-dom';


class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null

    };
    this.handleAddClick = this.handleAddClick.bind(this);

  }

  componentDidMount() {
    const currentUrl = window.location.href;
    const match = currentUrl.match(/\d+$/);
    const id = match[0];
    axios.get(`https://dummyjson.com/products/${id}`)
    .then(res => this.setState({ data: res.data }))
    .catch(err => console.log(err));
  
  }


  handleAddClick(product) {
    product.id=uuidv4();
    axios
    .post('http://localhost:3001/cart', product)
    .then((response) => {
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
      
        <>
        <div className='my-div'>
          <img src={data.thumbnail}/>
          <div className="image-container">
              <img src={data.images[0]} alt="Image 1"/>
              <img src={data.images[1]} alt="Image 2"/>
              <img src={data.images[2]} alt="Image 3"/>
          </div>

          

          
        </div>
        <div className='my-div'>
  <img className='logo' src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dwb078dc0d/images/adidas_logo.svg" alt="Adidas Logo"/>
  <p>{data.title}</p>
  <p>{data.description}</p>
  <div className="rating">
    <div>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
      <span className="star">&#9733;</span>
    </div>
    <div>
      <p className="left">5 of 5</p>
    </div>
    <div className="rating">
      <p className="right">22 Rates</p>
    </div>
  </div>
  <div className="rating2">
    <div>9,999 LE</div>
    <div>
      <p>9,999 LE</p>
    </div>
    <div>
      <p>30% off</p>
    </div>
  </div>
  <div className='logo'>Size</div>
  <div class="circle-buttons">
  <button>sm</button>
  <button>md</button>
  <button>lg</button>
  <button>xl</button>
  <button>xxl</button>
</div>
<div class="quantity">
  <span class="quantity-label logo">Quantity:</span>
  <div class="quantity-buttons">
    <div class="quantity-button">-</div>
    <span class="quantity-value">1</span>
    <div class="quantity-button">+</div>
  </div>
  <div className="button-container">
  <Link to="/cart" ><button onClick={() => this.handleAddClick(data)}  className="purple-button">Add to Cart</button></Link>
  <button className="yellow-button">Pickup from Store</button>
</div>

</div>

</div>

        </>
        ) : (
          <div className="loading">Loading......</div>
        )}
      </div>
    );
  }
}

export default Product;
