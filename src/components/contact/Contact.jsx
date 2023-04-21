import React from 'react'
import './contact.css'
import {MdMarkEmailUnread} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {RiWhatsappFill} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w023fdv', 'template_oyzf3sd', form.current, 'qrZTFZk5sX-IepZRb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdMarkEmailUnread className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>devgupta67621@gmail.com</h5>
            <a href="mailto:devgupta67621@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIN</h4>
            <h5>Dev Ji Gupta</h5>
            <a href="https://www.linkedin.com/in/dev-ji-gupta" target="_blank" >Send a Message</a>
          </article>
          <article className='contact__option'>
            <RiWhatsappFill className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+916394013191</h5>
            <a href="http://api.whatsapp.com/send?phone=6394013191" target="_blank">Send a Message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit'className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact
