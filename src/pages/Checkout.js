import React from 'react'
import Banner from '../components/Banner'
import CartProducts from '../components/cart/CartProducts';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

const navigate = useNavigate();
const { register, handleSubmit, formState: { errors } } = useForm();

const onSubmit = data => {
    localStorage.removeItem('shopping-carts');
    navigate('/order-success');
};

  return (
    <>

    <Banner cssId="page-banner" cssClass="about-banner">
        <h2>#Checkout</h2>
        <p style={{color: '#ffffff'}}>Checkout Product.</p>
    </Banner>

    <CartProducts disability={true}/>

    <section id="form-details" className="section-p1 form-checkout">

        <form onSubmit={handleSubmit(onSubmit)}>

                <h2 style={{marginBottom: '10px'}}>Shipping Details</h2>
            
                <input type="text" name="name" {...register("name", { required: true })} placeholder="Your Name"/>
                {errors.name && <div style={{color: 'red'}}><small>Name is required</small></div>}
                <input type="text" name="email" {...register("email")} placeholder="Email"/>
                {errors.email && <div style={{color: 'red'}}><small>Email is required</small></div>}
                <input type="text" name="phone" {...register("phone")} placeholder="Phone No"/>
                {errors.phone && <div style={{color: 'red'}}><small>Phone is required</small></div>}
                <textarea name="message" cols="30" rows="10" {...register("address")} placeholder="Address"></textarea>
                {errors.address && <div style={{color: 'red'}}><small>Adress is required</small></div>}
                <select name="payment_type" {...register("payment_type")}>
                    <option value="cash_on_delivery">Cash On Delivery</option>
                </select>
                {errors.payment_type && <div style={{color: 'red'}}><small>Payment Type is required</small></div>}

                <button className="normal" type="submit">Place Order</button>
          
            

        </form>

    </section>

      
    </>
  )
}

export default Checkout
