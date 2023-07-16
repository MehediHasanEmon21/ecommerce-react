import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCart } from "../features/product/ProductSlice";



const useCart = () => {
    
    const [carts, setCarts] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCarts = JSON.parse(localStorage.getItem('shopping-carts'));
        setCarts(fetchCarts);
      },[])

    const addCart = (product, qty = 1) => {
        
        let tempProduct = { ...product };
        let shoppingCart = [];
        let newCart;
        let quantity = qty > 1 ? qty : 1;

        const storedCart = localStorage.getItem('shopping-carts');
    
        if (storedCart) {
          shoppingCart = JSON.parse(storedCart);
        }
    
        const isProductAddedCart = shoppingCart.find(pro => pro.id == tempProduct.id);
    
        if (isProductAddedCart) {
    
          isProductAddedCart.qty = parseInt(isProductAddedCart.qty) + parseInt(quantity);
          newCart = [...shoppingCart];
        
        } else {

          tempProduct.qty = quantity;
          newCart = [...shoppingCart, tempProduct];
    
        }
    
        localStorage.setItem('shopping-carts', JSON.stringify(newCart))
    
      }

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

      const updateCartQty = (event, id) => {

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


      return { addCart,  removeCart, updateCartQty, carts, setCarts, quantity, setQuantity };

}

export default useCart;