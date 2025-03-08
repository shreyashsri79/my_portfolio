import React from 'react'
import Hero from './assets/components/Hero'
import Projects from './assets/components/Projects'
import AboutMe from './assets/components/AboutMe'
import ContactMe from './assets/components/ContactMe'
import EducationAndExperience from './assets/components/EducationAndExperience'
import Skills from './assets/components/Skills'
import AndroidProj from './assets/components/AndroidProj'
import WebProj from './assets/components/WebProj'

const App = () => {
  return (
    <>
      <div className='flex-col'>
        <Hero />
        <AboutMe />
        <Skills />
        <EducationAndExperience />
        <Projects />
        <AndroidProj />
        <WebProj />
        <ContactMe />
      </div>    
    </>
  )
}

export default App