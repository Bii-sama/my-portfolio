import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import './contact.css'


export default function ContactMe() {
  return (
    <div className='contact-me' id='contact'>
      <h1>Let's work Together</h1>
      <section className='section'>
      <form className='form'>
        <label htmlFor="name">Name</label>
        <input type="text" />
        <label htmlFor="subject">Subject</label>
        <input type="text" />
        <label htmlFor="details">Message</label>
        <textarea name="details" id="email" cols="60" rows="14"></textarea>

        <button type='Submit'>Send Email</button>
      </form>

      <div className='contacts'>
        <h2>Get In Touch</h2>
        <p>Let's work together! I'm always excited to collaborate on new projects. Send me a message and let's get started.</p>
      <a href='https://github.com/Bii-sama'target='_blank'><FaGithub className='icon' /> GitHub</a>
      <a href='https://www.linkedin.com/in/abidemi-omosanya-359152124/'target='_blank'><FaLinkedin className='icon' /> LinkedIn</a>
      <a href='https://twitter.com/bii_sama'target='_blank'><FaTwitter className='icon'/> Twitter</a>
      <a href='mailto:mail.bidemi75@gmail.com'><FaEnvelope className='icon'/> Email</a>
     </div>
     </section>
    </div>
  )
}
