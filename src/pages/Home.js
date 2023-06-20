import React from 'react'
import Feature from '../components/Feature'
import Products from '../components/products/Products'
import Newsletter from '../components/Newsletter'
import Deals from '../components/home/Deals'
import Hero from '../components/home/Hero'
import Season from '../components/home/Season'
import Banner from '../components/home/Banner'

const Home = () => {
  return (
    <>
    <Hero/>

    <Feature/>

    <Products type="feature"/>

    <Banner/>

    <Products type="new"/>

    <Deals/>

    <Season/>

    <Newsletter/>

    </>
  )
}

export default Home
