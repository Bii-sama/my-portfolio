import React from 'react'
import './body.css'
import picture from "../assets/images/my-picture.jpeg"

export default function Body() {
  return (
    <div className='landing-page'>
      
        <section className='image'>
            <img src={picture} alt="my-picture" width= "500" height="500"/>
        </section>

        <section className='profile'>
<h1>Hi, I'm Abidemi Omosanya</h1>
<h3>A software engineer based in Lagos</h3>
<p>I am a skilled and knowledgeable software engineer with expertise in
React, CSS, JavaScript, TypeScript, and Node.js,
seeking opportunities to create exceptional web experiences and
contribute to the success of a dynamic team.</p>
        </section>
     
    </div>
  )
}
