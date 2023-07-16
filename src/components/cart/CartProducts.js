import useCart from '../../hooks/useCart';

const CartProducts = ({disability}) => {

  const { removeCart, carts, updateCartQty } = useCart();
  
  const handleRemoveCart = (id) => {
      removeCart(id);
  }

  const handleQty = (event, id) => {
    updateCartQty(event, id);
  }

  if(carts && carts.length){
    return (
        <section id="cart" className="section-p1">
              <table>
                  <thead>
                      <tr>
                          {!disability && <td>Remove</td>}
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
                                     {!disability && <td><a onClick={ () => handleRemoveCart(id) }><i className="far fa-times-circle cancel"></i></a></td>}
                                      <td><img src={"assets/img/products/" + image} alt=""/></td>
                                      <td>{name}</td>
                                      <td>${price}</td>
                                      <td><input disabled={disability} className={disability ? 'checkout-input' : ''}  min={1} onChange={(event) => handleQty(event, id)}  type="number" value={qty}/></td>
                                      <td>${qty * price}</td>
                                    </tr>
      
                          })
                      }   
                  </tbody>
              </table>
        </section>
        )
  }else{
    return (
        <section className="page_404">
            <div className="container">
                <div className="row">	
                    <div className="col-sm-12 ">
                        <div className="col-sm-10 col-sm-offset-1  text-center">
                            <div className="four_zero_four_bg_cart">
                                <h1 className="text-center ">Cart is Empty</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }

  
}

export default CartProducts
