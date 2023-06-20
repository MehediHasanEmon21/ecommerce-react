import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product';

const Products = ({type}) => {
  
  let products;
  const fetchProducts = useSelector(state => state.product.products); 
  const featureProducts = fetchProducts.filter((pro) => pro.type == 'feature');
  const newProducts = fetchProducts.filter((pro) => pro.type == 'new');

  switch (type) {
    case 'feature':
      products = featureProducts;
      break;

    case 'new':
      products = newProducts;
      break;

    default:
      products = fetchProducts;
      break;
  }

  const featureHeading = <><h2>Feature Products</h2> <p>Summer Collection New Modern Design</p></>;
  const newHeading = <><h2>New Arrivals</h2> <p>Summer Collection New Modern Design</p></>;
  const heading = (type == 'feature' || type == 'all') ? featureHeading : newHeading;

  return (
    <section id="product1" className="section-p1">
        {heading}
        <div className="pro-container">
            {products && products.map((product) => <Product key={product.id} product={product}/> )}
        </div>
    </section>   
  )
}

export default Products
