import React from 'react'

const Blog = ({blog}) => {
  const {title, desc, img} = blog;
  return (
    <div className="blog">
        <div className="image">
            <img src={"assets/img/blog/" + img} alt=""/>
        </div>
        <div className="details">
            <h4>{title}</h4>
            <p>{desc}</p>
            <a href="#">Continue Reading</a>
        </div>
    </div>
  )
}

export default Blog
