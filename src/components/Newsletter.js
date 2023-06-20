import React from 'react'

const Newsletter = () => {
  return (
      <section id="newsletter" className="section-p1">
        <div className="newsletter-text">
            <h2>Sign Up for Newsletter</h2>
            <p>Get Email Updates about our latest shop and special offers</p>
        </div>
        <div className="form">
            <input type="text" placeholder="Enter Email"/>
            <button className="normal">Sign Up</button>
        </div>
    </section>
  )
}

export default Newsletter
