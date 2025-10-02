import React from 'react'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import AboutMe from './component/AboutMe'
import Project from './component/Project'
import TechStack from './component/TechStack'

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Project/>
      <TechStack/>
    </main>
  )
}

export default App