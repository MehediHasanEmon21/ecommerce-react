import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../features/product/ProductSlice';


const CartAdd = () => {

  const carts = useSelector(state => state.product.cart);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCart())
  },[])

  const total = carts && carts.reduce((acc, cur) => acc + cur.qty * cur.price, 0)

  return (
    <section id="cart-add" className="section-p1">
        <div className="coupon">
            <h3>Apply Coupon</h3>
            <input type="text" placeholder="Enter Your Code"/>
            <button className="normal">Apply</button>
        </div>
        <div className="subtotal">
            <h3>Card Totals</h3>
            <table>
                <tr>
                    <td>Card Subtotal</td>
                    <td>${total}</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td>Free</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>${total}</td>
                </tr>
            </table>
            <button className="normal">Proceed To Checkout</button>
        </div>
    </section>
  )
}

export default CartAdd
