import React from 'react'
import Blogs from '../components/blogs/Blogs'
import Pagination from '../components/Pagination'
import Banner from '../components/Banner'

const Blog = () => {
  return (
    <>
    <Banner cssId="blog-page-banner" cssClass="">
        <h2>#Readmore</h2>
        <p>Read All Cases studies about product from Blog</p>
    </Banner>
      
    <Blogs/>

    <Pagination/>
    </>
  )
}

export default Blog
