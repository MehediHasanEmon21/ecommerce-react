import React from 'react'

const Form = () => {
  return (
    <section id="form-details" className="section-p1">
        <form action="">
            <span>LEAVE A MESSAGE</span>
            <h2>We Love to hear from you</h2>
            <input type="text" name="name" placeholder="Your Name"/>
            <input type="text" name="email" placeholder="Email"/>
            <input type="text" name="subject" placeholder="Subject"/>
            <textarea name="message" cols="30" rows="10" placeholder="Message"></textarea>
            <button className="normal">Submit</button>
        </form>
        <div className="people">
            <div>
                <img src="assets/img/people/1.png" alt=""/>
                <p><span>Jhon Doe</span> <br/> Senior Marketing Manager <br/> Phone: +88988776767 <br/> Email: contact@example.cm</p>
            </div>
            <div>
                <img src="assets/img/people/2.png" alt=""/>
                <p><span>Watson Amble</span> <br/> Senior Software Engineer <br/> Phone: +88988776767 <br/> Email: contact@example.cm</p>
            </div>
            <div>
                <img src="assets/img/people/3.png" alt=""/>
                <p><span>Emilina John</span> <br/> Senior Managing Director <br/> Phone: +88988776767 <br/> Email: contact@example.cm</p>
            </div>
        </div>
    </section>
  )
}

export default Form
