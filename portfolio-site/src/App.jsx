import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Body from './components/Body'
import Services from './components/Services'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'





function App() {

  return (
  
    <div className='main'>
      <NavBar />
      <Body />
      <Services />
      <Projects />
      <ContactMe />
   </div>

  )
}

export default App
