import React from 'react'

const Details = () => {
  return (
    <section id="about-us" className="section-p1">
        <div className="image">
            <img src="assets/img/about/a6.jpg" alt=""/>
        </div>
        <div className="details">
            <h2>Who We Are</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quo iure soluta numquam sit rem aut error consequatur mollitia quis nostrum. Esse reiciendis consequuntur corrupti deleniti labore officia repellendus debitis.</p>
            <abbr title="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, deleniti?</abbr>
            <br/><br/>
            <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, repellat!</marquee>
        </div>
    </section>
  )
}

export default Details
