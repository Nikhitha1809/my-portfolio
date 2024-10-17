import React ,{ useRef, forwardRef } from 'react'
import './GetInTouch.css';
import contact from '../assets/contact.png';
import contactInfo from '../data/contact.json';
import emailjs from '@emailjs/browser';

const GetInTouch=forwardRef((props,ref)=> {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2ncoztj', 'template_ykcescg', form.current, {
        publicKey: 'SRJGpPNxObnFZXp2e',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return (
        <div className='main-container' ref={ref}>
            <h1 style={{ textAlign: "center" }}>
                <span style={{ color: "black" }} className='span-ele'>Get In</span>
                <span style={{ color: "rgb(115, 3, 167)" }} className='span-ele'>Touch</span>
            </h1>
            <div className='get-in-touch-container'>

                <div>
                    <img src={contact} alt='contact' />
                </div>
                <div>
                    <form className='contact-form' onClick={event.preventDefault()} ref={form} onSubmit={sendEmail}>
                        <div className='field'>
                            <input type='text' placeholder='Name' className='input-field' name="user_name"/>
                        </div>
                        <div className='field'>
                            <input type='email' placeholder='Email' className='input-field' name="user_email" />
                        </div>
                        <div className='field'>
                            <textarea type='text' placeholder='Message' className='input-field' name="message" />
                        </div>
                        <div className='field'>
                        <button type='submit' className='submit-btn'>Submit</button>
                        </div>
                    </form>
                    <div className='contact-container'>
                        {contactInfo.map((contact,id)=>{
                            return(
                                <div className='image-container' key={id} >
                                    <a href={contact.link} target="_blank">
                                        <img src={contact.image} width='30px' alt={contact.label} />
                                        <p>{contact.label}</p>
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
});

export default GetInTouch