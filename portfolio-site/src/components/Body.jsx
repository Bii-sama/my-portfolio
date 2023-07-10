import React from 'react'
import './body.css'
import picture from "../assets/images/my-picture.jpeg"

export default function Body() {
  return (
    <div className='landing-page'>
      
        <section className='image'>
            <img src={picture} alt="my-picture" width= "500" height="500"/>
        </section>

        <section className='profile' id='profile'>
<h1>Hi, I'm Abidemi Omosanya</h1>
<h3>A Software Engineer based in Lagos, Nigeria.</h3>
<p>I am a skilled and knowledgeable software engineer with expertise in
React, CSS, JavaScript, TypeScript, and Node.js,
seeking opportunities to create exceptional web experiences and
contribute to the success of a dynamic team.</p>

<a href='https://drive.google.com/file/d/169BLXKfchbh79lYCljx-1e2saPbIMDwx/view?usp=drive_link' target='_blank'>Download my CV</a>
        </section>
     
    </div>
  )
}
