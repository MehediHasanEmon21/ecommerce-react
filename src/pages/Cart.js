import React from 'react'
import CartProducts from '../components/cart/CartProducts'
import CartAdd from '../components/cart/CartAdd'
import Banner from '../components/Banner'

const Cart = () => {
  return (
    <>

    <Banner cssId="page-banner" cssClass="about-banner">
        <h2>#Cart</h2>
        <p style={{color: '#ffffff'}}>Your Cart products are here.</p>
    </Banner>

    <CartProducts/>

    <CartAdd/>
    </>
  )
}

export default Cart
