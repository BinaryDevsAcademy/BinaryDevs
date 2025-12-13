import { useState } from 'react'
import './App.css'
import { toast, Toaster } from 'sonner'
import './root.css'
import HeroSection from './Components/Sections/HeroSection/HeroSection'
import WhyBDSection from './Components/Sections/WhyBD/WhyBDSection'
import Reviews from './Components/Sections/Reviews/Reviews'
import EnrollSection from './Components/Sections/EnrollSection/EnrollSection'
import CoursesSection from './Components/Sections/Course/CoursesSection'
import { ContactSection } from './Components/Sections/ContactUs/ContactUs'

function App() {

  return (
    <>
      <title>BinaryDevs - Home</title>
      <HeroSection></HeroSection>
      <WhyBDSection></WhyBDSection>
      <Reviews></Reviews>
      <EnrollSection></EnrollSection>
      <CoursesSection></CoursesSection>
      <ContactSection></ContactSection>
    </>
  )
}

export default App
