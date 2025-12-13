import React from 'react'
import { Link } from 'react-router-dom'
import DarkLogo from '../../assets/logos/DarkVersion.png'
import { Instagram, Linkedin, LinkedinIcon, Mail, MapPin, Phone, Youtube } from 'lucide-react'
import { InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

function Footer() {
  return (
    <footer className='pt-10 px-4 pb-3 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
        <div className='flex flex-col gap-5 p-3'>
            <div>
                <Link className="flex gap-[10px] no-underline items-center company-details">
                    <div className="w-[40px] h-[40px]">
                        <img
                        src={DarkLogo}
                        alt="Dark Logo"
                        className="logo rounded-[50%]"
                        />
                    </div>
                    <div className="flex flex-col leading-tight">
                        <span className="font-bold">Binary Devs</span>
                        <span className="text-[.9rem] font-bold text-[var(--bd-primary)]">Academy</span>
                    </div>
                </Link>
            </div>
            <div className='text-justify'>
                Binary Devs Academy is a leading tech education platform dedicated to transforming beginners into professional full-stack developers. With hands-on training in Java, Spring Boot, Hibernate, React.js, SQL, and more, we empower students to build real-world projects and launch successful careers in tech.
            </div>
            <div className='flex flex-col  items-start justify-around gap-3'>
                <div className='font-bold text-[1.1rem]'>
                    Follow Us
                </div>
                <div className='flex gap-6 items-center'>
                    <a href="" className='font-[500] hover:text-[var(--bd-primary)]'>
                        <Youtube />
                    </a>
                    <a href="" className='font-[500] hover:text-[var(--bd-primary)]'>
                        <Instagram />
                    </a>
                    <a href="" className='font-[500] hover:text-[var(--bd-primary)]'>
                        <Linkedin />
                    </a>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-4 items-center'>
            <div className='font-bold text-[1.1rem]'>
                Quick Links
            </div>
            <menu className='flex flex-col gap-3'>
                <Link to={'/'} className='font-[500] hover:text-[var(--bd-primary)] cursor-target'>Home</Link>
                <Link className='font-[500] hover:text-[var(--bd-primary)] cursor-target'>Courses</Link>
                <Link className='font-[500] hover:text-[var(--bd-primary)] cursor-target'>Mentorship</Link>
                <Link className='font-[500] hover:text-[var(--bd-primary)] cursor-target'>Blog</Link>
                <Link className='font-[500] hover:text-[var(--bd-primary)] cursor-target'>Contact Us</Link>
                <Link className='font-[500] hover:text-[var(--bd-primary)] cursor-target'>About Us</Link>
                <Link className='font-[500] hover:text-[var(--bd-primary)] cursor-target'>Privacy Policy</Link>
                <Link className='font-[500] hover:text-[var(--bd-primary)] cursor-target'>Terms & Conditions</Link>
                <Link className='font-[500] hover:text-[var(--bd-primary)] cursor-target'>Careers</Link>
            </menu>
        </div>
        <div className='flex flex-col gap-4 items-center'>
            <div className='font-bold text-[1.1rem]'>
                Trending Courses
            </div>
            <menu className='flex flex-col gap-3'>
                <Link to='/course/java_full_stack'  className='font-[500] hover:text-[var(--bd-primary)] cursor-target'>
                    Java Full Stack Development
                </Link>
                <Link to='/course/python_full_stack'  className='font-[500] hover:text-[var(--bd-primary)] cursor-target'>
                    Python Full Stack Development
                </Link>
                <Link to='/course/frontend_development'  className='font-[500] hover:text-[var(--bd-primary)] cursor-target'>
                    Frontend Development
                </Link>
                <Link to='/course/backend_development'  className='font-[500] hover:text-[var(--bd-primary)] cursor-target'>
                    Backend Development
                </Link>
                 <Link to='/course/generative_ai'  className='font-[500] hover:text-[var(--bd-primary)] cursor-target'>
                    Generative AI
                </Link>
                <Link to='/course/data_analyst'  className='font-[500] hover:text-[var(--bd-primary)] cursor-target'>
                    Data Analyst
                </Link>
                <Link to='/course/data_science'  className='font-[500] hover:text-[var(--bd-primary)] cursor-target'>
                    Data Science
                </Link>
            </menu>
        </div>
        <div className='flex flex-col gap-4 items-center'>
            <div className='font-bold text-[1.1rem]'>
                Contact Us
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-1'>
                    <MapPin /> Address: KPHB, Hyderabad
                </div>
                <div className='flex gap-1'>
                    <Phone /> Phone: +91 9154163817
                </div>
                <div className='flex gap-1'>
                    <Mail /> Email: support@binarydevs.com
                </div>
                {/* map section future use */}
                {/* <div>
                    
                </div> */}
            </div>
        </div>
        <div className='col-span-full text-center'>
            © 2025 <Link to={'/'} className='text-[var(--bd-primary)] font-bold cursor-target'>Binary Devs Academy</Link>. All rights reserved.
        </div>
    </footer>
  )
}

export default Footer