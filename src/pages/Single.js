import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import useCart from '../hooks/useCart';
import Products from '../components/products/Products';


const Single = () => {
  
  const navigate = useNavigate();
  const [img, setImg] = useState(false);
  const [attr, setAttr] = useState('');
  const {id} = useParams();
  const [quantity, setQuantity] = useState(1);
  const products = useSelector(state => state.product.products);
  const product = products.find(pro => pro.id == id);
  const { addCart } = useCart();

  const handleSrc = (event) => {
    const value = event.target.getAttribute('src');
    setImg(true);
    setAttr(value);

  }

  const handleAddToCart = (product) => {
    addCart(product, quantity);
    navigate('/cart');
  }

  const handleQtyChange = (event) => {
    setQuantity(event.target.value);
  }

  return (
    <>
      <section id="product-details" className="section-p1">

        <div className="pro-images">
            <img src={ img ? attr : "/assets/img/products/" + product.image} alt=""/>
            <div className="single-product-images">
                <div className="img-col">
                    <img onClick={handleSrc} src="/assets/img/products/f1.jpg" alt=""/>
                </div>
                <div className="img-col">
                    <img onClick={handleSrc} src="/assets/img/products/f2.jpg" alt=""/>
                </div>
                <div className="img-col">
                    <img onClick={handleSrc} src="/assets/img/products/f3.jpg" alt=""/>
                </div>
                <div className="img-col">
                    <img onClick={handleSrc} src="/assets/img/products/f4.jpg" alt=""/>
                </div>
            </div>
        </div>

        <div className="pro-details">
            <h6>{product.name}</h6>
            <h4>{product.category}</h4>
            <h3>${product.price}</h3>
            <div>
                <select name="" className="size">
                    <option value="">Select Size</option>
                    <option value="">M</option>
                    <option value="">L</option>
                    <option value="">XL</option>
                    <option value="">XXL</option>            
                </select>
            </div>
            <input className="qty" min={1} type="number" value={quantity} onChange={handleQtyChange}/>
            <button className="normal add-cart" onClick={() => {handleAddToCart({...product, qty: quantity})}}>Add To Cart</button>
            <h4>Product Details</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti sequi ea, molestias ad magnam earum rerum quam quia doloremque consequatur inventore sapiente repellendus facere libero non delectus possimus molestiae deleniti soluta veritatis cumque dicta! Totam fugit, nulla neque doloremque, enim tempore eius natus debitis, quia repellendus iusto provident sint facilis?</p>
        </div>

     </section>

     <Products type="new"/>

    </>
  )
}

export default Single
