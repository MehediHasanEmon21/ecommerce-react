import React from 'react'

const Address = () => {
  return (
    <section id="contact-details" className="section-p1">
        <div className="details">
            <span>GET IN TOUCH</span>
            <h2>Visit one of our agency location or contact us today</h2>
            <h3>Head Office</h3>
            <div>
                <li>
                    <i className="fal fa-map"></i>
                    <p>56, Greeen Road, Englands</p>
                </li>
                <li>
                    <i className="far fa-envelope"></i>
                    <p>contact@example.com</p>
                </li>
                <li>
                    <i className="fas fa-phone-alt"></i>
                    <p>+8807656652325</p>
                </li>
                <li>
                    <i className="far fa-clock"></i>
                    <p>Mon: 8:00 - 17:00</p>
                </li>
            </div>
        </div>
        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.808802952267!2d-1.2569417243121122!3d51.75481969259966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2sbd!4v1686808610571!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
  )
}

export default Address
