import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Course from '../Sections/Course/Course'
import AllCourses from '../Sections/Course/AllCourses'
import PersonalizedGuidance from '../Sections/PersonalizedGuidance/PersonalizedGuidance'
import ErrorPage from '../ErrorPage/ErrorPage'
import AboutUs from '../Sections/AboutUs/AboutUs'
import ContactUs from '../Sections/ContactUs/ContactUs'
import Login from '../AdminComponents/MainComponents/Login'
import AdminLayout from '../AdminComponents/MainComponents/AdminLayout'
import UserLayout from './UserLayout'
import App from '../../App'
import LeadsPage from '../AdminComponents/SubComponent/LeadsPage'
import AdminHome from '../AdminComponents/SubComponent/AdminHome'
import StatsPage from '../AdminComponents/SubComponent/StatsPage'
import CourseManagement from '../AdminComponents/SubComponent/CourseManagement'
import Payments from '../AdminComponents/SubComponent/Payments'

function AppRoutes() {
  return (
    <Routes>

      {/* ================= USER WEBSITE ================= */}
      <Route path="/" element={<UserLayout />}>
        <Route index element={<App/> /* Home component */} />
        <Route path="course/:name" element={<Course />} />
        <Route path="all_courses" element={<AllCourses />} />
        <Route path="personalized_guidance" element={<PersonalizedGuidance />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Route>

      <Route path="/admin">
        {/* LOGIN (no sidebar) */}
        <Route path="login" element={<Login />} />

        {/* ADMIN APP (with layout + sidebar) */}
        <Route element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminHome />}>
            <Route path='' element={<StatsPage />}></Route>
            <Route path="leads" element={<LeadsPage />} />
            <Route path="courses" element={<CourseManagement />} />
            <Route path="payments" element={<Payments />} />
            <Route path='*' element={<ErrorPage />}></Route>
          </Route>
        </Route>
      </Route>



      {/* ================= 404 ================= */}
      <Route path="*" element={<ErrorPage />} />

    </Routes>
  )
}

export default AppRoutes
