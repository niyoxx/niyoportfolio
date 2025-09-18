import { useState } from 'react'
import React from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import { NavBar } from './layouts/NavBar'
import { MobileMenu } from './components/MobileMenu'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ContactPage } from './pages/ContactPage'


const App = () => {

  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />} {""}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100 `}
      >
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <HomePage />
        <AboutPage />
        <ProjectsPage />
        <ContactPage />


      </div>
    </>
  )
}

export default App

