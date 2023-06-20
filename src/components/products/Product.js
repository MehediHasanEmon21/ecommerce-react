import React from 'react'
import { useSelector } from 'react-redux';

const Product = ({ product }) => {
  const { category, name, image, price } = product;

  const addCart = (product) => {

    let tempProduct = { ...product };
    let shoppingCart = [];
    let newCart;

    const storedCart = localStorage.getItem('shopping-carts');

    if (storedCart) {
      shoppingCart = JSON.parse(storedCart);
    }

    const isProductAddedCart = shoppingCart.find(pro => pro.id == tempProduct.id);

    if (isProductAddedCart) {

      isProductAddedCart.qty = isProductAddedCart.qty + 1;
      newCart = [...shoppingCart];

    } else {

      tempProduct.qty = 1;
      newCart = [...shoppingCart, tempProduct];

    }

    localStorage.setItem('shopping-carts', JSON.stringify(newCart))



  }
  return (
    <div className="pro">
      <img src={"assets/img/products/" + image} alt="" />
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
      <a onClick={() => addCart(product)}><i className="far fa-shopping-cart cart"></i></a>
    </div>
  )
}

export default Product
