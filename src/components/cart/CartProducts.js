import useCart from '../../hooks/useCart';

const CartProducts = () => {
  
  const { removeCart, carts, renderInput, quantity, updateCartQty, handleArrow } = useCart();
  
  
  const handleRemoveCart = (id) => {
      removeCart(id);
  }

  const handleQty = (event, id) => {
    updateCartQty(event, id);
  }

  const handleKeyDown = (event) => {
    handleArrow(event);
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
                                <td><a onClick={ () => handleRemoveCart(id) }><i className="far fa-times-circle cancel"></i></a></td>
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
