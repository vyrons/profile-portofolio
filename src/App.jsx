import React from 'react'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import AboutMe from './component/AboutMe'
import Project from './component/Project'
import TechStack from './component/TechStack'
import WhatIDo from './component/WhatIDo'

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Project/>
      <TechStack/>
      <WhatIDo/>
    </main>
  )
}

export default App