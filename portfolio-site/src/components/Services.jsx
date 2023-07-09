import React from 'react'
import './services.css'

export default function Services() {
  return (
    <div className='my-services' id='services'>
      <h1>My Services</h1>
      <section className='services'>
        <article className='card'>
            <h2>Web Front-End Development</h2>
            <p>Creating the user interface and user experience of a website or web application.
                Coding the visual and interactive elements that users interact with directly on their web browsers.Technologies include:</p>
<ul>
    <li>HTML,CSS</li>
    <li>JavaScript</li>
    <li>Frameworks-React, Vue, Angular</li>
</ul>
            
        </article>
        <article className='card'>
        <h2>Web Back-End Development</h2>
        <p>Building server-side of applications, where the logic, functionality, and data processing of a website or web application are handled.
        I also work with databases, server-side programming languages, APIs, and frameworks to build the server-side components that power the website or application.
        Technologies include:
        </p>
        <ul>
    <li>TypeScript</li>
    <li>JavaScript</li>
    <li>Node.js, Express.js</li>
    <li>MongoDB</li>
    <li>Mongoose ODM</li>
    <li>PostgreSQL</li>
    <li>GraphQL</li>
    <li>SQLite</li>
</ul>
        </article>
        <article className='card'>
        <h2>Mobile Development</h2>
        <p>Creating applications specifically designed for mobile devices, such as smartphones and tablets. Technologies include:</p>
        <ul>
    <li>React Native</li>
    <li>Flutter</li>
</ul>
        </article>
      </section>
    </div>
  )
}
