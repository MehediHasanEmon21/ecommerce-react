import React from 'react'

const Footer = () => {
  return (
    <footer className="section-p1">
        <div className="col">
            <img src="/assets/img/logo.png" alt=""/>
            <h5>Contact</h5>
            <p><span>Address:</span> Lorem ipsum dolor sit amet.</p>
            <p><span>Phone:</span> 01766666776, +99099888778</p>
            <p><span>Hours:</span> 10.00 - 18.00, Mon-Fri</p>
            <div className="follow">
                <h5>Follow Us</h5>
                <div className="social-icon">
                    <a href=""><i className="fab fa-facebook"></i></a>
                    <a href=""><i className="fab fa-twitter"></i></a>
                    <a href=""><i className="fab fa-instagram"></i></a>
                    <a href=""><i className="fab fa-pinterest"></i></a>
                    <a href=""><i className="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
        <div className="col">
            <h5>About</h5>
            <div className="link">
                <a href="">About Us</a>
                <a href="">Delivery Information</a>
                <a href="">Privacy Policy</a>
                <a href="">Terms & Condition</a>
                <a href="">Contact Us</a>
            </div>
        </div>
        <div className="col">
            <h5>My Account</h5>
            <div className="link">
                <a href="">Sign In</a>
                <a href="">View Cart</a>
                <a href="">My Wishlist</a>
                <a href="">Track My Order</a>
                <a href="">Help</a>
            </div>
        </div>
        <div className="col">
            <h5>Install</h5>
            <p>From Google play and App Store</p>
            <div className="store-logo">
                <img src="/assets/img/pay/app.jpg" alt=""/>
                <img src="/assets/img/pay/play.jpg" alt=""/>
            </div>
            <p>Secured Payment Gateways</p>
            <img src="/assets/img/pay/pay.png" alt=""/>
        </div>
        <div className="copyright">
            <p>©2023 - Developed By Emon</p>
        </div>
    </footer>
  )
}

export default Footer
