import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Projects from './components/projects/projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer1/Footer1'


const App = () => {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <Projects/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default App
