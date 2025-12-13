import { MoveRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function EnrollSection() {
  return (
    <section className='h-[50svh] bg-[var(--bd-primary)] flex flex-col items-center justify-center gap-10'>
        <div className='flex flex-col items-center justify-center'>
            <div className='text-4xl font-bold text-white'>
                Ready to Become a Full Stack or Data Professional?
            </div>
            <div className='text-[var(--bd-gray-100)]'>
                Your future in tech begins here — learn, practice, and become job-ready with our expert-led training programs.
            </div>
        </div>
        <div className='flex items-center justify-around gap-10 flex-wrap'>
            <div className='min-w-[200px]'>
                <Link to='/contact-us' className='bg-[var(--bd-white)] text-[var(--bd-primary)] font-bold px-4 py-2 rounded border-2 cursor-target'>
                    Enroll Now
                </Link>
            </div>
            <div className='min-w-[200px]'>
                <Link to={'/all_courses'} className='px-4 py-2 rounded border-2 text-[var(--bd-white)] transition-all duration-500 font-bold hover:text-[var(--bd-primary)] hover:bg-[var(--bd-white)] cursor-target'>
                    Explore Courses
                </Link>
            </div>
        </div>
    </section>
  )
}

export default EnrollSection