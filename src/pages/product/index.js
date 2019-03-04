import React, {Component} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

class Product extends Component{
  state = {
    product: {}
  };

  componentDidMount() {
    this.loadProduct();
  }

  loadProduct = async () => {
    const { id } =  this.props.match.params;

    const response = await api.get(`/products/${id}`);
    const product  = response.data;

    this.setState({
      product: product 
    });
  }

  render() {
    
    const { product } = this.state;

    return(
      <div className="product-page">
        <div className="product-info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>
            URL: <a href={product.url}>{product.url}</a>
          </p>
        </div>
        <div className="actions">
          <Link to='/'>Lista</Link>
        </div>
      </div>
    )
  }
};

export default Product;