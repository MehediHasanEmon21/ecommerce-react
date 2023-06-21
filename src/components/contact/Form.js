import React from 'react'
import { useForm } from 'react-hook-form';


const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => alert(data);
  return (
    <section id="form-details" className="section-p1">
        <form onSubmit={handleSubmit(onSubmit)}>
            <span>LEAVE A MESSAGE</span>
            <h2>We Love to hear from you</h2>
            <input type="text" name="name" placeholder="Your Name" {...register("name", { required: true })}/>
            {errors.name && <div style={{color: 'red'}}><small>Name field is required</small></div>}
            <input type="text" name="email" placeholder="Email" {...register("email")}/>
            <input type="text" name="subject" placeholder="Subject" {...register("subject")}/>
            <textarea name="message" cols="30" rows="10" placeholder="Message" {...register("message")}></textarea>
            <button className="normal" type="submit">Submit</button>
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
