import React from 'react'
import Address from '../components/contact/Address'
import Form from '../components/contact/Form'
import Newsletter from '../components/Newsletter'
import Banner from '../components/Banner'

const Contact = () => {
  return (
    <>
  
    <Banner cssId="page-banner" cssClass="about-banner">
        <h2>#Let's Talk</h2>
        <p>Leave a message! We love to hear from you.</p>
    </Banner>

    <Address/>

    <Form/>

    <Newsletter/>
    </>
  )
}

export default Contact
