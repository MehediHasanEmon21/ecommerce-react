import React from 'react'
import Products from '../components/products/Products'
import Newsletter from '../components/Newsletter'
import Pagination from '../components/Pagination'
import Banner from '../components/Banner'

const Shop = () => {
  return (
    <>
    <Banner cssId="banner" cssClass="">
      <h3>#Stay Home</h3>
      <h2>Up to <span>70% off</span> - All Tshirt and Accesories</h2>
    </Banner>
    <Products type="all"/>

    <Pagination/>

    <Newsletter/>
    </>
  )
}

export default Shop
