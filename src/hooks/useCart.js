import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCart } from "../features/product/ProductSlice";



const useCart = () => {
    
    const [carts, setCarts] = useState([]);
    const [renderInput, setRenderInput] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCarts = JSON.parse(localStorage.getItem('shopping-carts'));
        setCarts(fetchCarts);
      },[])

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

      const handleArrow = (event) => {

         if (event.key === 'ArrowUp') {
            event.preventDefault();
            setQuantity((prevNumber) => prevNumber + 1);
          } else if (event.key === 'ArrowDown') {
            event.preventDefault();
            setQuantity((prevNumber) => prevNumber - 1);
          }

      }

      return { addCart,  removeCart, updateCartQty, handleArrow, carts, setCarts, renderInput, setRenderInput, quantity, setQuantity };

}

export default useCart;