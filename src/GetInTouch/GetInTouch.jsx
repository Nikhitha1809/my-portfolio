import React, { useRef, forwardRef, useState } from 'react'
import './GetInTouch.css';
import contact from '/assets/contact.png';
import contactInfo from '../data/contact.json';
import emailjs from '@emailjs/browser';

const GetInTouch = forwardRef((props, ref) => {
    const form = useRef();
    const [formData, setFormData]= useState({
        user_name:'', user_email:'', message:''
    })
    const [errors, setErrors]=useState({})
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value })
    }
    const sendEmail = (e) => {
        e.preventDefault();
        const validationErrors={}
        if(!formData.user_name.trim()){
            validationErrors.user_name="Name field is required";

        }
        if(!formData.user_email.trim()){
            validationErrors.user_email="Email field is required";
        }
        if(!formData.message.trim()){
            validationErrors.message="Message field is required";
        }
        setErrors(validationErrors)
       
        if(Object.keys(validationErrors).length===0){
        emailjs
            .sendForm('service_2ncoztj', 'template_ykcescg', form.current, {
                publicKey: 'SRJGpPNxObnFZXp2e',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setFormData({
                        user_name: '',
                        user_email: '',
                        message: ''
                    });
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        }
    };
    
    return (
        <div className='main-container' ref={ref}>
            <h1 style={{ textAlign: "center" }}>
                <span style={{ color: "black" }} className='span-ele'>Get In</span>
                <span style={{ color: "rgb(115, 3, 167)" }} className='span-ele'>Touch</span>
            </h1>
            <div className='get-in-touch-container'>

                <div>
                    <img src={contact} alt='contact' className='contact-img' />
                </div>
                <div>
                    <form className='contact-form'  ref={form} onSubmit={sendEmail}>
                        <div className='field'>
                            <input type='text' placeholder='Name' value={formData.user_name} className='input-field' name="user_name" onChange={handleChange} />
                            {errors.user_name && <span>* {errors.user_name}</span>}
                        </div>
                        <div className='field'>
                            <input type='email' placeholder='Email' value={formData.user_email}  className='input-field' name="user_email" onChange={handleChange} />
                            {errors.user_email&&<span>* {errors.user_email}</span>}
                        </div>
                        <div className='field'>
                            <textarea type='text' placeholder='Message' value={formData.message} className='input-field' name="message" onChange={handleChange}/>
                            {errors.message&&<span>* {errors.message}</span>}
                        </div>
                        <div className='field'>
                            <button type='submit' className='submit-btn'>Submit</button>
                        </div>
                    </form>
                    <div className='contact-container'>
                        {contactInfo.map((contact, id) => {
                            return (
                                <div className='image-container' key={id} >
                                    <a href={contact.link} target="_blank">
                                        <img src={contact.image} width='30px' alt={contact.label} />
                                        <p className='label'>{contact.label}</p>
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