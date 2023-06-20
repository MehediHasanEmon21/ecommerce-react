import React from 'react'
import { useSelector } from 'react-redux'
import Blog from './Blog';

const Blogs = () => {
  const blogs = useSelector(state => state.blog.blogs);
  return (
    <section id="blogs" className="section-p1">
        {blogs && blogs.map((blog) => <Blog key={blog.id} blog={blog}/>)}
   </section>
  )
}

export default Blogs
