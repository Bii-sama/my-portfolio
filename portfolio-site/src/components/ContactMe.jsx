import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa";
import './contact.css'


export default function ContactMe() {
  return (
    <div className='contact-me' id='contact'>
      <h1>Let's work Together</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" />
        <label htmlFor="subject">Subject</label>
        <input type="text" />
        <label htmlFor="details"></label>
        <textarea name="details" id="email" cols="70" rows="20"></textarea>
      </form>

      {/* <div className='contacts'>
      <a href='https://github.com/Bii-sama'><FaGithub /> GitHub</a>
      <a href='https://www.linkedin.com/in/abidemi-omosanya-359152124/'><FaLinkedin />LinkedIn</a>
      <a href='https://twitter.com/bii_sama'><FaTwitter />Twitter</a>
      <a href='mail.bidemi75@gmail.com'><FaEnvelope />Email</a>
      <p><FaLocationDot /> Lagos, Nigeria</p>
      </div> */}
    </div>
  )
}
