import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getCart } from '../../features/product/ProductSlice';

const CartProducts = () => {
  const [carts, setCarts] = useState([]);
  const [renderInput, setRenderInput] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCarts = JSON.parse(localStorage.getItem('shopping-carts'));
    setCarts(fetchCarts);
  },[])

  const removeCart = (id) => {
    const storedCart = localStorage.getItem('shopping-carts');

    if(storedCart){
        let shoppingCart = JSON.parse(storedCart);
        shoppingCart = shoppingCart.filter(pro => pro.id != id);
        localStorage.setItem('shopping-carts', JSON.stringify(shoppingCart));
        setCarts(shoppingCart);
    }
    dispatch(getCart())
  }
  const handleQty = (event, id) => {

    setRenderInput(true);
    const newQty = event.target.value;
    setQuantity(newQty)
    const storedCart = localStorage.getItem('shopping-carts');
    if(storedCart){

        let shoppingCart = JSON.parse(storedCart);
        let findProduct = shoppingCart.find(pro => pro.id == id);
        findProduct.qty = newQty;
        localStorage.setItem('shopping-carts', JSON.stringify(shoppingCart));
        setCarts(shoppingCart);

    }

    dispatch(getCart())

  }

  const handleKeyDown = (event) => {

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setQuantity((prevNumber) => prevNumber + 1);
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      setQuantity((prevNumber) => prevNumber - 1);
    }
    
  };

  
  return (
    <section id="cart" className="section-p1">
        <table>
            <thead>
                <tr>
                    <td>Remove</td>
                    <td>Image</td>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>SubTotal</td>
                </tr>
            </thead>
            <tbody>
                {
                    carts && carts.map((cart) => {
                        const {id, name, image, price, qty } = cart;

                        return <tr key={cart.id}>
                                <td><a onClick={ () => removeCart(id) }><i className="far fa-times-circle cancel"></i></a></td>
                                <td><img src={"assets/img/products/" + image} alt=""/></td>
                                <td>{name}</td>
                                <td>${price}</td>
                                <td><input min={1} onKeyDown={handleKeyDown} onChange={(event) => handleQty(event, id)}  type="number" value={renderInput ? quantity: qty}/></td>
                                <td>${qty * price}</td>
                            </tr>

                    })
                }   
            </tbody>
        </table>
    </section>
  )
}

export default CartProducts
