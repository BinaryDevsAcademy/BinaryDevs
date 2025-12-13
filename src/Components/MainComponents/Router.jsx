import App from '../../App'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Course from '../Sections/Course/Course'
import AllCourses from '../Sections/Course/AllCourses'
import PersonalizedGuidance from '../Sections/PersonalizedGuidance/PersonalizedGuidance'
import ErrorPage from '../ErrorPage/ErrorPage'
import AboutUs from '../Sections/AboutUs/AboutUs'
import ContactUs from '../Sections/ContactUs/ContactUs'

function Router() {
  return (
    <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/course/:name' element={<Course/>}></Route>
        <Route path='/all_courses' element={<AllCourses/>}></Route>
        <Route path='/personalized_guidance' element={<PersonalizedGuidance/>}></Route>
        <Route path='/about-us' element={<AboutUs/>}></Route>
        <Route path='/contact-us' element={<ContactUs />}></Route>

        <Route path='*' element={<ErrorPage/>}></Route>
    </Routes>
  )
}

export default Router