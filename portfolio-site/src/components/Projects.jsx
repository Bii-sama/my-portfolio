import React from 'react'
import work1 from '../assets/images/Screenshot 2023-07-08 at 19.44.34.png'
import work2 from '../assets/images/Screenshot 2023-07-08 at 19.47.38.png'
import work3 from '../assets/images/Screenshot 2023-07-08 at 19.49.15.png'
import work4 from '../assets/images/Screenshot 2023-07-08 at 19.50.10.png'
import { FaExternalLinkAlt } from "react-icons/fa";
import './projects.css'

export default function Projects() {
  return (
    <div className='my-works' id='works'>
       <h1>My Projects</h1>
      <section className='works'>
        <div className='work-card'>
            <img src={work1} alt="space site" width='250' height='250'/>
           <div className='p-visible'> <p>Multi-page space exploration site built with HTML, CSS and JavaScript DOM.
              </p>
             <h3> View  <a href='https://shiny-salamander-a6216f.netlify.app'>Here <FaExternalLinkAlt /></a></h3>
            </div>
        </div>
        <div className='work-card'>
            <img src={work2} alt="product page" width='250' height='250' />
         <div className='p-visible'>   <p>An E-commerce product page built with HTML, CSS and JavaScript DOM.
              </p>
            <h3>  View <a href='https://biiecommercepage.netlify.app'>Here <FaExternalLinkAlt /></a></h3>
            </div>
        </div>
        <div className='work-card'>
            <img src={work3} alt="landing-page" width='250' height='250'/>
           <div className='p-visible'> <p>Landing page for a music streaming site built with HTML, CSS.
            </p>
          <h3> View <a href='https://biiequalizer.netlify.app'>Here <FaExternalLinkAlt /></a></h3> 
            </div>
        </div>
        <div className='work-card'>
            <img src={work4} alt="bookmark page" width='250' height='250'/>
           <div className='p-visible'> <p>A bookmark app landing page built with HTML, CSS and JavaScript DOM.
              </p>
         <h3>  View   <a href='https://biibookmark.netlify.app'>Here <FaExternalLinkAlt /></a></h3> 
            </div>
        </div>
      </section>
    </div>
  )
}
