import React from 'react'
import Blogs from '../components/blogs/Blogs'
import Pagination from '../components/Pagination'
import Banner from '../components/Banner'

const Blog = () => {
  return (
    <>
    <Banner cssId="blog-page-banner" cssClass="">
        <h2 style={{color: '#ffffff'}}>#Blogs</h2>
        <p style={{color: '#ffffff'}}>Read All Products Details Here</p>
    </Banner>
      
    <Blogs/>

    <Pagination/>
    </>
  )
}

export default Blog
