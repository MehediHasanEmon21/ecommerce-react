import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { toast } from 'react-toastify';

const Product = ({ product }) => {
  const { id, category, name, image, price } = product;
  const { addCart } = useCart();
  const handleAddToCart = (product) => {
    addCart(product);
    toast("Cart Added Successffully 😀");
  }

  return (
    
      <div className="pro">
        <Link to={'/product/'+id}> <img src={"/assets/img/products/" + image} alt="" /> </Link>
        <div className="desc">
          <span>{category}</span>
          <h3>{name}</h3>
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <h4 className="price">${price}</h4>
        </div>
        <a onClick={() => handleAddToCart(product)}><i className="far fa-shopping-cart cart"></i></a>
      </div>
  )
}

export default Product
